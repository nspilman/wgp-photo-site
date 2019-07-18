const allPhotos = [
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_8335copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "Womens March117-1copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "Quincinera72316-079copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_1189-2copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_6852-2copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_8377copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_0785 copy.jpg" },
  { category: "eventPhotos", categoryName:"Event Photos", url: "DSC_8923copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_7842-copy-2.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "Photo-May-19,-1-11-56-PM-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_7830-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_5239-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_0232-2-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_9832-2-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_8891-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_3814-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_0353-2-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "Wedding-1-Griswold-Ceremony-048-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_8996-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_1806-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_3653-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_0280-2-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_0591-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_1841-2-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "DSC_8829-copy.jpg" },
  { category: "familyPhotos", categoryName:"Family Photos", url: "BoysAlbumCoverSunflowerscopy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Senior-Lexi-Basel-50-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9717-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Simeon-for-Website-07-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Emmy-Wiedemann-Final-Edits-56-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_5883-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Senior-Ryan-Disch-56-(1)-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_4906-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_0318-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9253-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_5055-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_6447-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Nick-Pedersen-Senior-Photos-04-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_8440-2-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Senior-James-for-website-1-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_0834-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9889-2-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Senior-Justin-Quist-05-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Narik-For-Website-08-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9953-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_5983-2-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Morgan-for-WGP-website-07-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9819-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_8127-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_9288-2-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_8089-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Ben-Steffen-Senior-Photos-12-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_0659-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Makenzie-Wallace-Final-Shots-54-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_4469-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Emmy-Wiedemann-Final-Edits-44-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "Eli-for-Website-08-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_7668-copy.jpg" },
  { category: "seniorPhotos", categoryName:"Senior Photos", url: "DSC_8043-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_9769-2-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_4096-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_2610-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_9734-2-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_3040-2-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5978-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_4279-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos",url: "Wedding-1-Griswold-Ceremony-096-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_6302-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_4611-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_1999-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5909-2-copy-2.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5694-copy-2.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5860-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_4324-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5439-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_2421-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_3177-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_5424-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_6074-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_3160-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_6047-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_2716-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "Cindi-and-Steve-9-17-16-53-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_2926-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "f55001344-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_4876-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_3741-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "DSC_2228-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "f54739840-2-copy.jpg" },
  { category: "weddingPhotos", categoryName:"Wedding Photos", url: "Photo-May-19,-1-06-38-PM-copy.jpg" }
];

const categoryHash = {
  category: "weddingPhotos", categoryName:"Wedding Photos",
  category: "eventPhotos", categoryName:"Event Photos",
  category: "seniorPhotos", categoryName:"Senior Photos",
  category: "familyPhotos", categoryName:"Family Photos"
}

const photoComponent = {
  template: `
    <div class="post post-item col-md-4 col-sm-6 col-xs-12">
    <div class="post-item-content">
        <div class="blog-item-header">
            <img @click="sendOpenImageMessageToParent" :src="filepath" alt="photograph">	
        </div>
    </div>
</div>
    `,
  props: ["filepath"],
  data(){
    return{
    }
  },
  methods:{
    sendOpenImageMessageToParent(){
      this.$emit('opened-image',this.filepath)
    }
  },
  created(){
  },
};

const photoSections = {
  template:`
  `,
  components:{
    photoComponent
  },
  data(){
    return{
    }
  },
  created(){
  },
  props:['photos']
}

var app = new Vue({
  el: "#portfolio-photos",
  data: {
    allPhotos: allPhotos,
    categoryHash:categoryHash,
    displayedPhotos:null,
    selectedPhoto:null,
    hideArray:['.nav','#contact','.header']
   },
  components: {
    photoComponent,
    photoSections,
    menucomponent,
  },
  computed:{
    categories(){
      return  [...new Set(allPhotos.map(photo => photo.category))]
    },
    photosByCategory(){
      photos = {};
      this.categories.forEach(category => photos[category] = allPhotos.filter(photo => photo.category == category))
      return photos;
    }
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
      this.selectedPhoto = e;
      this.toggleShow()
      
    },
    closeImage(){
      this.selectedPhoto = null;
      this.toggleShow()
    }
  },
  created(){
   portfolioCategory === "allPhotos"? this.displayedPhotos = this.allPhotos : this.displayedPhotos = this.allPhotos.filter(photo => photo.category === portfolioCategory)
   document.addEventListener('contextmenu',e => {
    e.preventDefault();
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
