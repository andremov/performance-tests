function maxArea(height) {
  let izq = 0;
  let der = height.length - 1;
  let aguamax = 0;
  
  while (izq < der) {
      let agua = Math.min(height[izq], height[der]) * (der - izq);
      aguamax = Math.max(aguamax, agua);
      if (height[izq] < height[der]) {
          izq++;
      } else {
          der--;
      }
  }
  
  return aguamax;
}
