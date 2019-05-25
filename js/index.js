const priceModal = {
  template:`
  
  `
}
  
  var photoSlider = new Vue({
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
          // e.preventDefault();
          const copyright = document.querySelector("#copyright")
          copyright.style.display = "block";
          setTimeout(()=>{copyright.style.display="none"},2000)
        })
      }
    })

const services = new Vue({
  el:"#services",
  data:{
    pricingModal:null,
    packages:{
      wedding:
      [
        {name:'The Works',
        price:'$2695',
        details:
        [
          '2 Photographers up to 10 hours of coverage.',
          'Engagement Shoot',
          'Several hundred fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
          'Photo/copyright release to print and share all images as you desire.',
        ]
        },
        {
          name:'The Next Best Thing',
          price:'$2,195.00',
          details:
        [
          '2 photographers up to 7 hours of coverage.',
          'Engagement Shoot.',
          '200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
          'Photo/copyright release to print and share all images as you desire.'
        ]
        },
        {name:'Lean and Mean',
        price:'$1,895.00',
        details:
      [
        '2 photographers up to 7 hours of coverage.',
        '200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
        'Photo/copyright release to print and share all images as you desire.'
      ]
      },
      {name:'Down and Dirty',
      price:'$750.00',
      details:
    [
      '1 photographers up to 5 hours of coverage.',
      '100+ fully-edited, high-resolution, digital images delivered via Dropbox link within 10 weeks.',
      'Photo/copyright release to print and share all images as you desire.'
    ]
    },
    {
      name:'Ala Carte',
      price:'',
      details:
      [
        'Engagement Session $350.00',
        'Each additional hour of coverage 1 photographer $200.00',
        'Each additional hour of coverage 2 photographers $300.00',
        'Wedding Montage Canvas 24" x 36" $500.00',
        'Wedding Montage Canvas 30" x 40" $750.00',
        'Wedding Album - Starting at $600.00',
      ]
    }
      ],
      senior:
      [
        {
          name:'The Works',
          price:'$400',
          details:
          [
            'Up to 3 hours of shooting.',
            'No limit to number of locations.',
            'No limit to number of clothing changes.',
            '25+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.',
            'Photo/copyright release to share and print all images as you desire.'
          ]
        },
        {
          name:'Down and Dirty',
          price:'$150.00',
          details:
          [
            '1/2 hour shoot.',
            'One location.',
            'No clothing changes.',
            '5 fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.',
            'Photo/copyright release to share and print all images as you desire.',
          ]
        },  
        {
          name:'Ala Carte',
          price:'',
          details:
          [
            'Sports/Music Montage Canvas 24" x 36" $500.00*',
            'Sports/Music Montage Canvas 30" x 40" $750.00*',
            '*requires an extra 45 minute shoot.',
          ]
        },
      ],
      family:
      [
        {
          name:'The Works',
          price:'$300',
          details:
          [
          'Up to 2 hours of shooting',
          '1 Location',
          '15+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.',
          'Photo/copyright release to share and print all images as you desire.',          
          ]
        },
        {
          name:'Down and Dirty',
          price:'$150.00',
          details:
          [
            '1/2 hour shoot',
            '1 Location',
            '5 fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.',
            'Photo/copyright release to share and print all images as you desire.',
          ]
        },
      ],
      event:
      [
        {
          name:'The Works',
          price:'$750.00',
          details:
          [
            'Up to 5 hours of shooting.',
            '1 Photographer',
            'As Many Locations as you like.',
            '100+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 10 days.',
            'Photo/copyright release to share and print all images as you desire.',
          ]
        },
        {
          name:'Down and Dirty',
          price:'$300.00',
          details:
          [
            '1 hour of shooting.',
            '1 Photographer',
            '1 location',
            '30+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 10 days.',
            'Photo/copyright release to share and print all images as you desire.',
          ]
        },
      ],
    }
  },
  methods:{
    clicked(){
      this.pricingModal = true;
    },
    closeModal(){
      this.pricingModal = null;
    }
  }
})