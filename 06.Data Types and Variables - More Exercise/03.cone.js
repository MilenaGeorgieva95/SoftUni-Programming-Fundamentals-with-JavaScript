function cone(radius, height) {
  let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

  let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

  let area = Math.PI * radius * slant + Math.PI * Math.pow(radius, 2);

  console.log("volume = " + volume.toFixed(4));
  console.log("area = " + area.toFixed(4));
}
