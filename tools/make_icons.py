import pathlib
import struct
import zlib


def chunk(tag: bytes, data: bytes) -> bytes:
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)


def inside_round_rect(x: float, y: float) -> bool:
    margin = 0.06
    radius = 0.22
    if x < margin or y < margin or x > 1 - margin or y > 1 - margin:
        return False
    left = margin + radius
    right = 1 - margin - radius
    top = margin + radius
    bottom = 1 - margin - radius
    cx = min(max(x, left), right)
    cy = min(max(y, top), bottom)
    return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2 + 1e-8


def inside_n(x: float, y: float) -> bool:
    nx = (x - 0.30) / 0.40
    ny = (y - 0.27) / 0.48
    if not (0 <= nx <= 1 and 0 <= ny <= 1):
        return False
    stem = 0.22
    if nx <= stem or nx >= 1 - stem:
        return True
    return abs(ny - nx) < 0.18 and 0.12 < nx < 0.88


def write_png(path: pathlib.Path, size: int) -> None:
    rows = []
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            fx = (x + 0.5) / size
            fy = (y + 0.5) / size
            if not inside_round_rect(fx, fy):
                row += b"\x00\x00\x00\x00"
            elif inside_n(fx, fy):
                row += bytes((61, 231, 208, 255))
            else:
                row += bytes((15, 36, 48, 255))
        rows.append(bytes(row))
    raw = b"".join(rows)
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b"")
    path.write_bytes(png)


if __name__ == "__main__":
    folder = pathlib.Path(__file__).resolve().parents[1] / "icons"
    folder.mkdir(parents=True, exist_ok=True)
    for size in (16, 48, 128):
        write_png(folder / f"icon{size}.png", size)
