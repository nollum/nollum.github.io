<template>
 <div class="home">
    <div class="intro">
        <h1>Hey, I'm <span id="name">Rustam</span>.</h1>
        <h3>I am an aspiring software developer, currently studying computer science. 
            My main passion is backend development. 
            I am also interested in cybersecurity, 
            fullstack web development, and embedded systems.
        </h3>
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

 #name {
    color: #00804a;
 }

 .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d1d1d1;
    margin: auto;
 }

 .intro {
    /* margin: 0 7vw; */
    line-height: 5vh;
    animation: fadeIn 0.5s;
    width: 50%;
 }

 .links span {
    padding: 20px;
 }

 

</style>