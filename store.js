 
const wording = `All of the images in my Galleries are available for sale as fine art metal or canvas prints in various sizes from small to large. To purchase a print simply click on the “Contact to Purchase” button and send me the name of the image, size you’d like, and whether you’d like metal or canvas. If you don't find the size you'd like, custom prints are available. 

Licensing of images is welcome for use in the hospitality industries and some commercial usage. For licensing information and a price quote please contact me.

Popular sizes Metal (Standard) - 11 x 14 ($125), 16 x 20 ($235), 24 x 36 ($635), 40 x 50 ($1,550)
Popular sizes Metal (Panorama) - 12 x 24 ($205), 20 x 40 ($600), 30 x 60 ($1,375)

Popular sizes Canvas (Standard) - 11 x 14 ($100), 16 x 20 ($195), 24 x 36 ($455)
Popular sizes Canvas (Panorama) - 12 x 24 ($175), 20 x 40 ($485)`

const categoryHash = {
  category: "Nature", categoryName:"Nature Photos",
  category: "cityscape", categoryName:"Cityscape Photo",
}

const allPhotos = [
    {category:"nature",categoryName:"Nature Photos",url:"Sunflower-Bumblebee-1.jpg",name:"Sunflower Bumblebee 1"},
    {category:"nature",categoryName:"Nature Photos",url:"Sunflower-Bumblebee-2.jpg",name:"Sunflower Bumblebee 2"},
    {category:"nature",categoryName:"Nature Photos",url:"Baby-Sunflower.jpg",name:"Baby Sunflower"},
    {category:"nature",categoryName:"Nature Photos",url:"Loon-Family-Swim.jpg",name:"Loom Family Swim"},
    {category:"nature",categoryName:"Nature Photos",url:"Great-Horned-Owl-with-baby.jpg",name:"Great Horned Own With Baby"},
    {category:"nature",categoryName:"Nature Photos",url:"Cows-Grazing.jpg",name:"Cows Grazing"},
    {category:"nature",categoryName:"Nature Photos",url:"Bald-Eagle-Liftoff.jpg",name:"Bald Eagle Liftoff"},
    {category:"nature",categoryName:"Nature Photos",url:"Mallard-Family-in-a-Log.jpg",name:"Mallard Family in a Log"},
    {category:"nature",categoryName:"Nature Photos",url:"Winter-Robin.jpg",name:"Winter Robin"},
    {category:"nature",categoryName:"Nature Photos",url:"Autumn-at-Holy-Hill.jpg",name:"Autumn at Holy Hill"},
    {category:"nature",categoryName:"Nature Photos",url:"Eastern-Bluebird.jpg",name:"Eastern Bluebird"},
    {category:"nature",categoryName:"Nature Photos",url:"Drake-Woody-in-the-Marsh.jpg",name:"Drake Woody in the Marsh"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"île-de-la-cité-at-sunrise.jpg",name:"île de la cite at sunrise "},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Eiffel-Tower-Dusk.jpg",name:"Eiffel Tower at Dusk"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Fishing-Boats-Garda-Lake.jpg",name:"Fishing Boats Garda Lake"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Womens-March-1-17-1-copy-2.jpg",name:"Women's March"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Piazza-San-Marco-Wedding-B:W.jpg",name:"Piazza San Marco Wedding"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Eiffel-Tower-on-Seine-at-Sunset.jpg",name:"Eiffel Tower on the Seine at Sunset"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Sunset-from-Spanish-Steps.jpg",name:"Sunset from the Spanish Steps"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Notre-Dame-Pink-Blossoms.jpg",name:"Notre Dame Pink Blossoms"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Capitol-Tulips-2017-copy-2.jpg",name:"Capitol Tulips"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Eiffel-Tower-from-Arc-d'Triomphe-B:W.jpg",name:"Eiffel Tower from Arc d'Triomphe - B:W"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Fireworks-Shake-the-Lake-2.jpg",name:"Fireworks - Shake the Lake 2"},
    {category:"cityscape",categoryName:"Cityscape Photos",url:"Fireworks-Shake-the-Lake-1.jpg",name:"Fireworks - Shake the Lake 1"},
  ];
  
  const photoComponent = {
    template: `
      <div class="post post-item col-md-4 col-sm-6 col-xs-12">
      <div class="post-item-content">
          <div class="blog-item-header">
              <img @click="sendOpenImageMessageToParent" :src="filepath" alt="photograph">	
          </div>
      </div>
      <div class = "w-100 text-center">
      <h4>
        {{photo.name}}
        </h4>
      </div>

  </div>
      `,
    props: ["filepath","photo"],
    data(){
      return{
      }
    },
    methods:{
      sendOpenImageMessageToParent(){
        this.$emit('opened-image',{filepath:this.filepath,photo:this.photo})
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
      displayedPhotos:allPhotos,
      selectedPhoto:null,
      hideArray:['.nav','#contact','.header',"#storeText"],
      selectedPhotoName:null,
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
        this.selectedPhoto = e.filepath;
        this.selectedPhotoName = e.photo.name;
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
  