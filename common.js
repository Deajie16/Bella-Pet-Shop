// Shared "backend" simulated with localStorage
const Store = {
  get(k,v){ try{return JSON.parse(localStorage.getItem(k)) ?? v}catch(e){return v}},
  set(k,v){ localStorage.setItem(k, JSON.stringify(v)) },
  remove(k){ localStorage.removeItem(k) }
}
const Data = {
  products: [
    {id:'cat-beef', name:"Bella’s Baked Beef Dish with Sweet Potatoes Dry Cat Food, 5 lbs.", price:1161.92, rating:4.5, img:"assets/0011E67B-3500-4039-8583-A94A94F8A100.jpeg"},
    {id:'dog-chicken', name:"Bella’s Fresh Chicken Dish with Carrots Fresh Frozen Dog Food, 5 lbs.", price:1161.92, rating:4.5, img:"assets/2C9A4CD6-7743-420C-89E5-CB7FE7C7B493.jpeg"},
    {id:'dog-beef', name:"Bella’s Baked Beef Dish with Sweet Potatoes Dry Dog Food, 5 lbs.", price:1161.92, rating:4.4, img:"assets/F66E02C1-CCB6-447F-B5FA-B81F7DAAEB72.jpeg"},
    {id:'vitamins', name:"Bella’s Dog & Cat Vitamins", price:966.01, rating:4.2, img:"assets/7886B6BA-A9E8-419C-B582-6E2409B1E760.jpeg"}
  ]
};
function currency(n){ return ₱ ${n.toLocaleString(undefined,{maximumFractionDigits:2, minimumFractionDigits:2})} }
function addToCart(id, qty=1){
  const cart = Store.get('cart', []);
  const idx = cart.findIndex(c=>c.id===id);
  if(idx>-1) cart[idx].qty += qty; else cart.push({id, qty});
  Store.set('cart', cart);
}
function cartCount(){ return Store.get('cart', []).reduce((a,b)=>a+b.qty,0) }