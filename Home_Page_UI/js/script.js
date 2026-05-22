async function loadComponent(id, file) {
    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Could not load ${file}`);
        }

        const data = await response.text();

        document.getElementById(id).innerHTML = data;

    } catch (error) {

        console.error(error);

    }
}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("navbar", "components/navbar.html");

    loadComponent("hero", "components/hero.html");

    loadComponent("features", "components/features.html");

    loadComponent("products", "components/products.html");

    loadComponent("promotions", "components/promotions.html");

    loadComponent("featured", "components/featured.html");

    loadComponent("testimonials", "components/testimonials.html");

    loadComponent("experts", "components/experts.html");

    loadComponent("blog", "components/blog.html");

    loadComponent("newsletter", "components/newsletter.html");

    loadComponent("footer", "components/footer.html");

});