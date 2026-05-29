export function generatePosterGradient(title: string): string {
  const gradients: Record<string, string> = {
    "寄生虫": "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%)",
    "寻梦环游记": "linear-gradient(135deg, #2d1b69 0%, #6b2fa0 30%, #e94560 60%, #f5a623 100%)",
    "流浪地球": "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 30%, #2d4a7a 60%, #5ba3e6 100%)",
    "沙丘": "linear-gradient(135deg, #3d2b1f 0%, #8b6914 40%, #c4a35a 70%, #f5e6c8 100%)",
    "疯狂动物城": "linear-gradient(135deg, #1a5276 0%, #2ecc71 40%, #f39c12 70%, #e74c3c 100%)",
  };
  return gradients[title] || "linear-gradient(135deg, #1a1a2e 0%, #4a4a6a 100%)";
}
