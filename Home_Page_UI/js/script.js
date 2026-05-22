async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();

    document.getElementById(id).innerHTML = data;
}

loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html");
loadComponent("features", "components/features.html");
loadComponent("products", "components/products.html");
loadComponent("promotions", "components/promotions.html");
loadComponent("featured", "components/featured.html");
loadComponent("testimonial", "components/testimonial.html");
loadComponent("experts", "components/experts.html");
loadComponent("blog", "components/blog.html");
loadComponent("newsletter", "components/newsletter.html");
loadComponent("footer", "components/footer.html");