import shutil
from pathlib import Path

portfolio_root = Path(r"D:\Demand Rush\portfolio_workspace")
dest_dir = Path(r"D:\Demand Rush\portfolio\public\images\projects")
dest_dir.mkdir(parents=True, exist_ok=True)

projects = [
    "credit_risk_decision_engine",
    "demand_sales_forecasting",
    "ev_automotive_analytics",
    "olist_delivery_analytics",
    "medical",
    "pol4_hackathon",
    "customer_churn_intelligence",
    "tehran_stock_forecasting"
]

print("Copying high-resolution project visual assets to portfolio website public directory...")
for p in projects:
    src_banner = portfolio_root / p / "assets" / "banner" / "github_banner.png"
    src_poster = portfolio_root / p / "assets" / "poster" / "project_poster.png"
    
    if src_banner.exists():
        shutil.copy2(src_banner, dest_dir / f"{p}_banner.png")
        print(f"Copied {p} banner")
    if src_poster.exists():
        shutil.copy2(src_poster, dest_dir / f"{p}_poster.png")
        print(f"Copied {p} poster")

# Copy resume to public
resume_src = Path(r"D:\Demand Rush\Ali_Ajvand_Resume_ATS_Optimized.md")
if resume_src.exists():
    shutil.copy2(resume_src, Path(r"D:\Demand Rush\portfolio\public\Ali_Ajvand_Resume_ATS_Optimized.md"))
    print("Copied optimized resume to portfolio public directory")

