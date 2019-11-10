<template>
  <div class="maps">
      <h3 class="Signika-Bold">Please visit us!</h3>
      <p class="Signika-Light">Little Cupcake Bakeshop 30 Prince St, New York, NY 10012, USA</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.9190233775619!2d-73.99549947478243!3d40.723133888736854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f585d7627%3A0xac8afce849d773db!2sLittle%20Cupcake%20Bakeshop!5e0!3m2!1ssv!2sse!4v1573380028039!5m2!1ssv!2sse " frameBorder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "maps"
}
</script>

<style lang="scss" scoped>
.maps{
  display: flex;
  margin: 10px;
  flex-flow: column;
}

 iframe{
    height:200px;
    width:auto;
    position: inherit;
}

h3{
  margin: 0;
  padding: 0;
}

@font-face {
    font-family: "Signika-Bold";
    src: url("../assets/Fonts/Signika-Bold.ttf");
}

.Signika-Bold {
    color: rgb(165, 49, 78);
    font-family: "Signika-Bold";
    font-size: 1.5rem;
}

@font-face {
    font-family: "Signika-Light";
    src: url("../assets/Fonts/Signika-Light.ttf");
}

.Signika-Light {
    color: rgb(0, 0, 0);
    font-family: "Signika-Light";
}

@media (min-width: 768px) and (max-width: 1023px) {
  //Tablet
  h3{
  margin: 0;
  padding: 0;
}

 .maps{
  display: flex;
  flex-flow: column;
  align-items: center;
}

iframe{
   width: 500px;
   height: 450px;
   border:0;
}
}

@media (min-width: 1024px) { 
 //Desktop
 .maps{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 30px;
}

 iframe{
   width: 900px;
   height: 450px;
   border:0;
}

h3{
  margin: 0;
  padding: 0;
}
}
</style>