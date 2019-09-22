const photoComponent = {
  template: `
        <img class="portfolio-image" :style="{gridRowEnd:'span '+ spans }" @load="setSpans" ref="imageRef" @click="sendOpenImageMessageToParent" :src="filepath" alt="photograph">	
    `,
  props: ["filepath","index"],
  data(){
    return{
      spans : 0,
      height:0,
      width:0,
    }
  },
  methods:{
    sendOpenImageMessageToParent(){
      this.$emit('opened-image',this.index)
    },
    setSpans(){
      const {imageRef}  = this.$refs;
      const height = imageRef.clientHeight
      const width = imageRef.clientWidth
      const spans = Math.ceil(height / 10 + 2)
      this.spans = spans;
    }
  },
};

const loadingScreen = {
  template:`<h1> Loading </h1>`
}

var app = new Vue({
  el: "#portfolio-photos-wrapper",
  data: {
    photos:[],
    selectedPhotoIndex:null,
    hideArray:['.nav','#contact','.header'],
    isLoading:true,
    imageLoaded:0,
    allCategories:['photos-wedding','photos-event','photos-family','photos-senior']
   },
  components: {
    photoComponent,
    menucomponent,
    loadingScreen
  },
  methods:{
    toggleShow(){
      this.hideArray.forEach(tag =>{
        const domElement = document.querySelector(tag)
        const currentDisplay = domElement.style.display
        domElement.style.display = currentDisplay == 'none' ?  'block' :  'none'
      }
        )

    },
    openImage(e){
      this.selectedPhotoIndex = e;
      this.toggleShow()
      
    },
    closeImage(){
      this.selectedPhotoIndex = null;
      this.toggleShow()
    },
    loadPhotos(){
      this.photos.forEach(photo =>{
        const img = new Image();
        img.src = photo;
      img.onload = () => {
        this.imageLoaded++;
        if (this.imageLoaded > 6) {
          this.isLoading = false;
          return
        }}
        })
  },
  async getPhotosFromAws(portfolioCategory){
    const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=${portfolioCategory}`
    const resp = await fetch(url)
    const json = await resp.json()
    for(let i = 1; i < await json.length ; i ++){
      this.photos.push(await json[i])
    }
    this.loadPhotos();
  }
},
computed:{
  selectedPhoto(){
    return this.photos[this.selectedPhotoIndex]
  },
}
,
  async created(){
    if(portfolioCategory === 'all'){
      this.allCategories.forEach(category => { this.getPhotosFromAws(category)})
      this.photos = this.photos.sort();
    }
    else{
      await this.getPhotosFromAws(portfolioCategory);
    }
      document.addEventListener('contextmenu',e => {
    // e.preventDefault();
    const copyright = document.querySelector("#copyright")
    copyright.style.display = "block";
    setTimeout(()=>{copyright.style.display="none"},2000)
  })
  }
});

var header = new Vue({
  el: "#header",
  components: {
    menucomponent,
  },
});
