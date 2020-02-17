

const photoSlider = new Vue({
  el: "#header",
  data: {
    homepagePhotos: [
    ],
    currentPhotoIndex: 0,
    autoplay_bool: true,
    isLoading: true,
    imageLoaded: 0,
    aboutSectionMarkdown:'',
  },
  components: {
    menucomponent,
  },
  computed: {
    currentPhoto() {
      return this.homepagePhotos[this.currentPhotoIndex]
    }

  },
  methods: {
    async getPhotosFromAws(portfolioCategory) {
      const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=${portfolioCategory}`
      const resp = await fetch(url)
      const json = await resp.json()
      for (let i = 1; i < await json.length; i++) {
        this.homepagePhotos.push(await json[i])
      }
      this.loadPhotos();
    },
    loadPhotos() {
      this.homepagePhotos.forEach(photo => {
        const img = new Image();
        img.src = photo;
        img.onload = () => {
          this.imageLoaded++;
          if (this.imageLoaded > 6) {
            this.isLoading = false;
            this.autoplay()
            return
          }
        }
      },
      )
    },
    nextPhoto() {
      this.currentPhotoIndex < this.homepagePhotos.length - 1 ? this.currentPhotoIndex++ : this.currentPhotoIndex = 0;
    },
    autoplay() {
      setInterval(() => {
        this.nextPhoto()
      }, 3000)
    }
  },
  created() {
    this.getPhotosFromAws('photos-homepage-slider')
    document.addEventListener('contextmenu', e => {
      e.preventDefault();
      const copyright = document.querySelector("#copyright")
      copyright.style.display = "block";
      setTimeout(() => { copyright.style.display = "none" }, 2000)
    })
  },
  computed:{
    compiledMarkdown(){
      return marked(this.aboutSectionMarkdown, { sanitize: true })
    }
  }
})

const aboutSection = new Vue({
  el:"#about",
  data(){
    return {
      aboutSectionMarkdown: '',
      servicesSectionMarkdown: '',
      rootUrl:'https://sfune2tj12.execute-api.us-east-1.amazonaws.com/default/GetTextContent?filepath=',
      urls:{ about:'Homepage_about', services:'Homepage_services' } 
    }
  },
  methods:{
    async getHomePageText(urlKey){
      const url = `${this.rootUrl}${this.urls[urlKey]}`;
      const resp = await fetch(url);
      return resp.text();
    },
  },
  computed:{
    compiledMarkdown(){
      return marked(this.aboutSectionMarkdown, { sanitize: true })
    },
    serviceSectionRendered(){
      return this.servicesSectionMarkdown.split('~~').map(section => marked(section,{sanitize:true}))
    }
  },
  async created(){
    this.aboutSectionMarkdown =  await this.getHomePageText('about');
    this.servicesSectionMarkdown = await this.getHomePageText('services');
  }
})

const servicesSection = new Vue({
  el:"#service-content",
  data(){
    return {
      aboutSectionMarkdown: '',
      servicesSectionMarkdown: '',
      rootUrl:'https://sfune2tj12.execute-api.us-east-1.amazonaws.com/default/GetTextContent?filepath=',
      urls:{ about:'Homepage_about', services:'Homepage_services' } 
    }
  },
  methods:{
    async getHomePageText(urlKey){
      const url = `${this.rootUrl}${this.urls[urlKey]}`;
      const resp = await fetch(url);
      return resp.text();
    },
    compileMarkdown(markdown){
      return marked(this.markdown, { sanitize: true })
    }
  },
  computed:{
    serviceSectionRendered(){
      return this.servicesSectionMarkdown.split('~~').map(section => {
        return section.split("\n").filter(splitSecion => splitSecion.length > 0).map(splitSecion => marked(splitSecion,{sanitize:true}))
      })
    }
  },
  async created(){
    this.aboutSectionMarkdown =  await this.getHomePageText('about');
    this.servicesSectionMarkdown = await this.getHomePageText('services');
    console.log(this.serviceSectionRendered)
  }
})

const pricecomponent = {
  template: `
      <div class = "container" style="padding-top:5em;">
      <h1> {{ service }} </h1>
      <div class = "row">
        <div v-for="package in packages[service]" class = "col-sm-5" style="background-color:rgb(255,255,255,.7); padding:2em;margin:.5em; border-radius:1em;">
          <h3>
            {{package.name}} - {{package.price}}
          </h3>
          <h6 v-for="detail in package.details">
            {{detail}}
          </h6>          
        </div>

      </div>

     </div>
      `,
  data() {
    return {
      wedding: 'wedding',
      packages: {
        wedding:
          [
            {
              name: 'The Works',
              price: '$2695',
              details:
                [
                  '2 Photographers up to 10 hours of coverage.',
                  'Engagement Shoot',
                  'Several hundred fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
                  'Photo/copyright release to print and share all images as you desire.',
                ]
            },
            {
              name: 'The Next Best Thing',
              price: '$2,195.00',
              details:
                [
                  '2 photographers up to 7 hours of coverage.',
                  'Engagement Shoot.',
                  '200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
                  'Photo/copyright release to print and share all images as you desire.'
                ]
            },
            {
              name: 'Lean and Mean',
              price: '$1,895.00',
              details:
                [
                  '2 photographers up to 7 hours of coverage.',
                  '200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.',
                  'Photo/copyright release to print and share all images as you desire.'
                ]
            },
            {
              name: 'Down and Dirty',
              price: '$750.00',
              details:
                [
                  '1 photographers up to 5 hours of coverage.',
                  '100+ fully-edited, high-resolution, digital images delivered via Dropbox link within 10 weeks.',
                  'Photo/copyright release to print and share all images as you desire.'
                ]
            },
            {
              name: 'Ala Carte',
              price: '',
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
              name: 'The Works',
              price: '$400',
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
              name: 'Down and Dirty',
              price: '$150.00',
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
              name: 'Ala Carte',
              price: '',
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
              name: 'The Works',
              price: '$300',
              details:
                [
                  'Up to 2 hours of shooting',
                  '1 Location',
                  '15+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.',
                  'Photo/copyright release to share and print all images as you desire.',
                ]
            },
            {
              name: 'Down and Dirty',
              price: '$150.00',
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
              name: 'The Works',
              price: '$750.00',
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
              name: 'Down and Dirty',
              price: '$300.00',
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
    }
  },
  props: ['service'],
  methods: {
    getHeight() {
      const divRaw = document.querySelector('#pricingModalHeight')
      return divRaw.clientHeight
    }
  },
  created() {
  }

}
