<template>
  <div class="about">
    <h4 class="Signika-Bold">Our history</h4>
    <p class="Signika-Light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <h4 class="Signika-Bold">About our recipies</h4>
    <p class="Signika-Light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

    <h4 class="Signika-Bold">Franchising</h4>
    <p class="Signika-Light">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style lang="scss" scoped>
.about {
  margin: 10px;
}
h4{
  margin: 0;
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
// tablet
@media (min-width: 768px) and (max-width: 1023px) {
 .about {
  margin: 20px;
}
}

//Desktop
@media (min-width: 1024px) {
  .about {
  margin: 30px;
}

h4{
  margin-top: 10px;
  margin-bottom: 10px;
}
}
</style>