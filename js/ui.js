export function renderHeader(active){ 
  return `<header class="container nav"><div class="logo">PixHarvest</div><nav class="links">
    <a href="index.html"${active==='home'?' style="font-weight:700"':''}>Home</a>
    <a href="products.html"${active==='products'?' style="font-weight:700"':''}>Products</a>
    <a href="about.html"${active==='about'?' style="font-weight:700"':''}>About</a>
    <a href="contact.html"${active==='contact'?' style="font-weight:700"':''}>Contact</a>
    <a href="cart.html">Cart</a>
    <a href="login.html">Login</a>
  </nav></header>`;
}
export function renderFooter(){ return `<footer class="container footer"><div>Contact: pixharvest@gmail.com • Instagram: @pixharvest</div></footer>`; }
