
  var app = new Vue({
    el: "#homepageSlider",
    data: {
      homepagePhotos:[
          'images/photos_from_dan/homepageSlider/BoysAlbumCoverSunflowerscopy2.jpg',
          'images/photos_from_dan/homepageSlider/DSC_0353-2.jpg',
          'images/photos_from_dan/homepageSlider/DSC_2926.jpg',
          'images/photos_from_dan/homepageSlider/DSC_4096.jpg',
          'images/photos_from_dan/homepageSlider/DSC_4876.jpg',
          'images/photos_from_dan/homepageSlider/DSC_5055.jpg',
          'images/photos_from_dan/homepageSlider/DSC_5694.jpg',
          'images/photos_from_dan/homepageSlider/DSC_6302.jpg',
          'images/photos_from_dan/homepageSlider/DSC_7668.jpg',
          'images/photos_from_dan/homepageSlider/DSC_8440-2.jpg',
          'images/photos_from_dan/homepageSlider/DSC_8891.jpg',
          'images/photos_from_dan/homepageSlider/EmmyWiedemann.jpg',
          'images/photos_from_dan/homepageSlider/MakenzieWallace.jpg'
    ],
    currentPhotoIndex:0,
    autoplay_bool:true,
     },
    components: {
  
    },
    computed:{
      currentPhoto(){
        return this.homepagePhotos[this.currentPhotoIndex]
      }
    
    },
    methods:{
      nextPhoto(){
        this.currentPhotoIndex < this.homepagePhotos.length - 1 ? this.currentPhotoIndex++ : this.currentPhotoIndex = 0;
      },
      previousPhoto(){
        this.currentPhotoIndex > 0 ? this.currentPhotoIndex-- : this.currentPhotoIndex = this.homepagePhotos.length -1;
      },
      autoplay(){
        setInterval(() => {
          console.log(this.autoplay_bool)
          // if(this.autplay_bool==true){
            this.nextPhoto()
          // }
        },3000)
      }
    },
      created(){
        this.autoplay()
        document.addEventListener('contextmenu',e => {
          e.preventDefault();
          const copyright = document.querySelector("#copyright")
          copyright.style.display = "block";
          setTimeout(()=>{copyright.style.display="none"},2000)
        })
      }
    })