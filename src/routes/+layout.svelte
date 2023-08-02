<script>
    import '../../src/app.css'
</script>

<nav>
    <div class="container">
        <div class="title">
            <a href='/'>the backpage</a>
        </div>
        <div class="links">
            <a href="/about">about</a>
            <a href="/links">links</a>
            <a href="/newsletter">newsletter</a>
        </div>
    </div>
</nav>
<slot />
<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 10px;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
    }
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%; /* Adjust as needed */
        max-width: 1200px; /* Adjust as needed */
    }
    
    nav .title {
        font-size: 20px; /* adjust as needed */
    }

    nav .title a{
        text-decoration: none;
    }
    
    nav .links {
        display: flex;  /* Show by default */
    }
    
    nav .links a {
        text-decoration: none;
        margin-left: 20px;
        font-size: 17px;
    }
    
    nav .links a:hover {
        background-color: #ddd;
        color: black;
    }
    
    @media (max-width: 600px) {
        nav .title {
        font-size: 45px; /* adjust as needed */
    }
        .container {
            flex-direction: column; /* Make the items stack vertically */
            align-items: center; /* Center items horizontally */
            width: 100%; /* Take up full width */
        }

        nav .links {
            margin-top:20px
        }
        
        
        nav .links a {
            font-size: 25px; /* Smaller font size for links on small screens */
            margin: 10px; /* Add some margin around each link */
        }
    }

    </style>
    