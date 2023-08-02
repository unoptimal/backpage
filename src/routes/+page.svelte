<div class="hero">
    <h1>the backpage</h1>
    <h2>celebrating miscellaneous Internet projects</h2>
    <picture>
        <source media="(max-width: 950px)" srcset="/mobile.PNG">
        <source media="(min-width: 601px)" srcset="/desktop.png">
        <img src="/desktop.png" alt="i must obey the inscrutable exhortations of my soul">
    </picture>
    <a class="btn" href="/links">see projects</a>
</div>

<style>
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1 {
    font-size: 3em; /* Adjust this as needed. 'em' is a relative unit of measurement. */
    margin: 20px ;
}

h2 {
    font-size: 1.5em; /* Adjust this as needed. */
    margin: 20 px;
}

.btn {
    display: inline-block;
    color: #fff;
    background-color: #333;
    padding: 10px 20px;
    margin-top: 20px;
    text-decoration: none;
    font-size: 1em;
    border-radius: 5px;
    transition: background-color 0.2s ease;
}

.btn:hover {
    background-color: #555;
}

@media (max-width: 470px) {
    .hero img {
        width: 90vw; /* Adjust this as needed. This will make the image take up 75% of the viewport width. */
        height: auto; /* This will maintain the aspect ratio of the image. */
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 1.5em;
    }

    .btn {
        font-size: 0.8em;
        padding: 8px 16px;
    }
}
</style>
