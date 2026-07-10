from pathlib import Path

base = Path(__file__).resolve().parent.parent / "public" / "images"

images = {
    "about/workshop.svg": "Workshop Atelier",
    "hero/hero-bg.svg": "Velocity Studio",
    "hero/showcase.svg": "Motorcycle Showcase",
    "motorcycles/velocity-v1-1.svg": "Velocity V1",
    "motorcycles/velocity-v1-2.svg": "Velocity V1",
    "motorcycles/velocity-v1-3.svg": "Velocity V1",
    "motorcycles/velocity-v2-1.svg": "Velocity V2",
    "motorcycles/velocity-v2-2.svg": "Velocity V2",
    "motorcycles/velocity-c1-1.svg": "Velocity C1",
    "motorcycles/velocity-c1-2.svg": "Velocity C1",
    "motorcycles/velocity-a1-1.svg": "Velocity A1",
    "motorcycles/velocity-a1-2.svg": "Velocity A1",
    "motorcycles/velocity-e1-1.svg": "Velocity E1",
    "motorcycles/velocity-e1-2.svg": "Velocity E1",
    "team/vikram-singh.svg": "Vikram Singh",
    "team/priya-narang.svg": "Priya Narang",
    "team/rohan-mehta.svg": "Rohan Mehta",
    "testimonials/aarav-patel.svg": "Aarav Patel",
    "testimonials/mia-chen.svg": "Mia Chen",
    "testimonials/luca-rossi.svg": "Luca Rossi",
}

for rel_path, title in images.items():
    path = base / rel_path
    path.parent.mkdir(parents=True, exist_ok=True)
    gradient = "linearGradient" if path.parent.name in {"hero", "about"} else "radialGradient"
    color1 = "#0b1220" if path.parent.name == "hero" else "#111827"
    color2 = "#181f2f" if path.parent.name == "hero" else "#1f2937"
    content = f"""<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1600\" height=\"1000\" viewBox=\"0 0 1600 1000\">
  <defs>
    <{gradient} id=\"g\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"1600\" y2=\"1000\">
      <stop offset=\"0%\" stop-color=\"{color1}\" />
      <stop offset=\"50%\" stop-color=\"{color2}\" />
      <stop offset=\"100%\" stop-color=\"#0f172a\" />
    </{gradient}>
  </defs>
  <rect width=\"1600\" height=\"1000\" fill=\"url(#g)\" />
  <circle cx=\"1300\" cy=\"200\" r=\"220\" fill=\"#ffffff16\" />
  <circle cx=\"220\" cy=\"780\" r=\"170\" fill=\"#ffffff0c\" />
  <text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"Inter, Arial, sans-serif\" font-size=\"88\" fill=\"#f8fafc\" opacity=\"0.95\">{title}</text>
  <text x=\"50%\" y=\"62%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"Inter, Arial, sans-serif\" font-size=\"32\" fill=\"#cbd5e1\" opacity=\"0.82\">Luxury motorcycle experience</text>
</svg>"""
    path.write_text(content, encoding="utf-8")
    print(f"Created {path}")
