const clientLove = [
  { category: "clientLove", url: "DSC_4876copy.jpg",text:`"Great experience!  Comfortable atmosphere, excellent communication, plus I love the photos!" Martina L. `},
  { category: "clientLove", url: "MakenzieWallaceFinalShots-54copy.jpg",text:`"Great session - Amazing Images.  Dan took senior photos of my daughter and several students that I work with.  He provided clear instructions, photo tips and a contract prior to the sitting.  He scouted out the locations I requested prior to the photo session and was well prepared.  He was flexible and willing to take suggestions of photo poses I suggested.  He shared amazing images within 24 hours of the session.  Highly satisfied customer!!"  Amy W.` },
  { category: "clientLove", url: "DSC_0834copy.jpg",text:`"He was absolutely amazing!!  I am a very shy and reserved person, but his sense of humor made me get out of my shell a little and live!  It was an amazing photo session.  He was professional and had so many great ideas.  This senior photoshoot was one to remember!" Flo B.` },
  { category: "clientLove", url: "SeniorRyanDisch-24(1)copy.jpg",text:`"First of all, Dan was very quick to get back to me, and set up the shoot.  The senior pictures he did for my son were crisp and clear, with plenty of options to choose from, black and white and color.  He allowed 3 different changes of clothes, which was great.  He is very creative on different locations and variety of poses.  I would highly recommend him." Julie D.` },
  { category: "clientLove", url: "DSC_8335copy2.jpg" ,text:`"Dan did a great job.  He showed up early and was ready to go.  He took great shots and uploaded them in a timely manner."  Pete C.`},
  // { category: "clientLove", url: "DSC_8996copy.jpg" ,text:``},
  // { category: "clientLove", url: "DSC_9734-2copy.jpg" ,text:``},
  // { category: "clientLove", url: "DSC_6103copy.jpg" ,text:``},
  { category: "clientLove", url: "DSC_7847copy.jpg" ,text:`"The outdoor photos Dan took of our son for his High School Senior picture are INCREDIBLE!  His artistry, experience and passion for what he does is evident in EVERY photo:  the variety of poses, the sense of color combinations, the eye for background and foreground choices, the clarity of the images, the use of both color and black & white to create the images.  He captured the essence of our son in ways familiar and unique, as well as evocative of the person our son is becoming.  Dan's flexibility regarding scheduling and locations for the photo session was much appreciated, as were his suggestions for making the photo session a great experience the whole way around.  We would recommend Dan in a heartbeat!!!"  Michele S.`},
  { category: "clientLove", url: "EmmyWiedemannFinalEdits-49copy.jpg" ,text:`"Best shoot ever.  Dan was awesome.  Great with helping us pick the venue and patient with us throughout the shoot.  His turnaround on the pictures was really fast and they looked fantastic.  Highly recommend the Wine Guy."  Britt W.`},
  // { category: "clientLove", url: "DSC_3372copy.jpg" ,text:``},
  { category: "clientLove", url: "FamilyPhotosThanksgiving2016-21copy.jpg" ,text:`"Talented artist with the camera.  Captured my husband and me in ways any previous pictures had not accomplished.  Our love shown directly from his lens.  Dan captures sports action shots that make you feel as if you are out on the court or field, experiencing the excitement yourselves.  And the children's photos make a person want to reach out and hug each child.  He captures their very inner essence and joy." Lynn K.`},
  { category: "clientLove", url: "DSC_4387-2copy.jpg" ,text:`"Dan is the MAN! He shoots raw, keeps grumpy teen boys entertained and takes the very best pictures. We love this guy!!" Erin W.`},
  { category: "clientLove", url: "DSC_4028copy.jpg" ,text:`"We are so pleased with Dan's photos of our wedding!  He captured priceless action shots, worked closely with us to execute our ideas, and scoped out the scenery on sites to carefully choose photo locations.  Dan paid close attention to lighting and performed beautiful editing to enhance coloring and create timeless effects in our photos... We'll be returning to Wine Guy Photography for all of our future life events requiring photography.  We trust Dan to take the best photos for us and our family to cherish forever!  We also love his friendly, down-to-earth personality and sincere willingness to go out of his way to deliver amazing photo outcomes!"  Angie L.`},
  { category: "clientLove", url: "SelinaLepsiFamilyPHotos-11 copy2.jpg" ,text:`"Arrived on time.  Had great equipment and took amazing pictures!  Easy to work with!"  Selina L.`},
  { category: "clientLove", url: "DSC_2610copy.jpg" ,text:`"Dan is the perfect combination of professional and involved.  His experience led to many beautiful shots that were dreamt up by his passion for photography, rather than beautifying a point and shoot.  While his skill and quality are that of a professional, he was personally invested on a much more individual level, even going out and purchasing additional materials (at no small cost) in order to fulfill a more artistic vision.  Dan is a fantastic photographer and was the perfect choice for my fiancé and I.  While the pictures that we requested were fantastic, it was the pictures where we let him run with it that produced the most frame-able moments. He CANNOT be beaten for the price, and we would use him again in a heartbeat." Katie L.`},
  { category: "clientLove", url: "Wedding1GriswoldCeremony-07 copy.jpg" ,text:`Dan is awesome to work with.  Never felt like he was in our faces but somehow captured every moment.  The picture quality is AMAZING.  Don't pass him up!" Darcy S.`},
  { category: "clientLove", url: "Quinciñera72316-099copy.jpg" ,text:`"Great person to work with and pictures are beautiful!!"`}
];


var app = new Vue({
  el: "#testimonials",
  data: {
    testimonials: clientLove,
   },
   created(){
      document.addEventListener('contextmenu',e => {
      // e.preventDefault();
      const copyright = document.querySelector("#copyright")
      copyright.style.display = "block";
      setTimeout(()=>{copyright.style.display="none"},2000)
    })
   }
  })