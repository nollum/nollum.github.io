<template>
  <div class="grid">
    <!-- <a href="https://github.com/Nollum/spry" class="card">Spry</a> -->
        <div class="card">
            <img src="spry.PNG">
            <h2>Spry</h2>
            <p>A minimalist project management framework. Inspired by Trello.</p>
        </div>
        <div class="card">
            <img src="pathfinding.PNG">
            <h2>Pathfinding Visualizer</h2>
            <p>A simple and vibrant pathfinding visualizer. Visualizes DFS, BFS, Dijkstra’s, and A*.</p> 
        </div>
        <div class="card">
            <img src="handsfree.PNG">
            <h2>HandsFree</h2>
            <p>Control your keyboard and mouse with the motions of your face. Winner of Hack Western 7.</p> 
        </div>
        <div class="card">
            <!-- <img src="../../public/handsfree.PNG"> -->
            <h2>Distributed Password Cracker</h2>
            <p>Bruteforce passwords efficiently by distributing the load among participating nodes.</p> 
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .grid {
        /* margin: auto; */
        margin: auto 20px;
        display: flex;
        justify-content: center;
        align-items: center;    
        flex-direction: row;
        flex-wrap: wrap;
    }

    .grid .card {
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 40vh;
        height: 50vh;
        background-color: #ffffff;
        border-radius: 5%;
        overflow-y: auto;
        box-shadow: 1px 2px 15px rgb(0, 0, 0);
        animation: fadeIn 0.5s;
    }

    .card img {
        height: 90%;
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 5%;
        border-top-right-radius: 5%;
    }

    .card h2 {
        margin-top: 10px;
    }

    .card p {
        margin: auto;
        padding: 10px;
    }

    @media (max-width: 400px) {
        .grid {
            display: block;
        }
    }
</style>