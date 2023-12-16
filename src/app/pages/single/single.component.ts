import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
      district = [
        
          
        { "id": 1,
         "name": 'Pathanamthitta',"image":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/17/fb/80/perunthenaruvi-waterfall.jpg?w=700&h=-1&s=1", 
         "paragraph":"Pathanamthitta (IPA: [pɐt̪ːɐnɐn̪d̪iʈːɐ]), is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km2. It is the administrative capital of Pathanamthitta district. The town has a population of 37,538. The Hindu pilgrim centre Sabarimala is situated in the Pathanamthitta district; as the main transport hub to Sabarimala, the town is known as the 'Pilgrim Capital of Kerala'.[3] Pathanamthitta District, the thirteenth revenue district of the State of Kerala, was formed with effect from 1 November 1982, with headquarters at Pathanamthitta. Forest covers more than half of the total area of the District. Pathanamthitta District ranks the 7th in area in the State. The district has its borders with Allepey, Kottayam, Kollam and Idukki districts of Kerala and Tamil Nadu.Nearest City Is Thiruvalla,Located At A Distance Of 30 km .Thiruvalla Railway Station Is 30 km via Thiruvalla-Kumbazha Highway.Buses Ply Every 30 Minutes From Thiruvalla To Pathanamthitta & Vice Versa.",
         "map":"https://www.bing.com/maps?osid=eac52204-fdc6-44a1-a312-e746a1d167bd&cp=9.265334~76.53924&lvl=10.47&pi=0&imgid=4f9fdc09-07b2-4d48-9ad1-e5ec9acdc550&v=2&sV=2&form=S00027",
         "spots":
         [
        
          {
                "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/84/90/72/sabarimala-temple.jpg?w=300&h=300&s=1",
                "name":"Sabarimala Sri Dharmasastha Temple"
          },
          {
                 "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/76/b6/the-forest-area-on-the.jpg?w=500&h=400&s=1",
                 "name": " Konni Forest Reserve"
          },
        {
                  "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e8/52/b5/achankovil-river.jpg?w=500&h=400&s=1",
                  "name":" Achankovil River"
        },
        {
                  "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/56/aa/38/getlstd-property-photo.jpg?w=500&h=400&s=1",
                  "name": " St.George Orthodox Church (Chandanapally Valiyapalli )"
        },
        {                
                  "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cc/bf/de/caption.jpg?w=500&h=-1&s=1",
                  "name": " Perunthenaruvi Waterfall"

        },
        {
                   "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/98/d9/1c/caption.jpg?w=500&h=400&s=1",
                   "name":"Gavi Tourism"
        }

         ]
        },
        
        {
           "id": 2, "name": 'Alapuzha' , "image":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/95/14/alleppey-backwater-tour.jpg?w=1200&h=900&s=1", "paragraph":"Affectionately nicknamed the 'Venice of the East' by travellers from across the world, Alappuzha is a district of immense natural beauty. Embraced by the Arabian Sea in the west and a network of lakes, lagoons and freshwater rivers criss-crossing it, this backwater country is home toa vibrant animal and avian life. By virtue of its proximity to the sea, the town has always carved out an exclusive place for itself in the maritime history of Kerala. Renowned for its boat races, beaches, marine products and coir industry, the singularity of this land is the region called Kuttanad. A land of lush paddy fields referred to as the 'Rice Bowl of Kerala', it is one of the few places in the world where farming is done below sea level. This once prosperous trading and fishing centre is nowadays a world renowned backwater tourist destination.",
           "spots":
           [
            {
                "img":"https://www.holidify.com/images/cmsuploads/square/attr_1127.jpg",
                "name":"Alleppey Beach"
            },
            {
              "img":"https://www.holidify.com/images/cmsuploads/square/attr_2427_20190315131619.jpg",
                "name":"Alleppey Backwaters"
            },
            {
              "img":"https://www.holidify.com/images/cmsuploads/square/attr_1127.jpg",
                "name":"House Boats"
            },
            {
              "img":"assets/img/IM1.jpg",
                "name":"Alappuzha Lighthouse"
            },
            {
              "img":"assets/img/im2.jpg",
                "name":"Chakkulathukavu Temple"
            },

           ]
          },
        { id: 3, name: 'Kollam', image:"https://images.thrillophilia.com/image/upload/s--e_TZrDXj--/c_fill,g_auto/v1/attractions/images/000/005/789/original/1584705795_shutterstock_1622435974.jpg.jpg", paragraph:"One of the premier trade capitals of the Old World, Kollam is the centre of the country’s cashew trading and processing industry. Extolled by Marco Polo and Ibn Batuta in glowing terms, this was once a famous port of international spice trade. This historic town is home to the celebrated Ashtamudi Lake, making it a gateway to the breath-taking backwaters of Kerala. The eight-hour boat trip between Kollam and Alappuzha is the longest and most enchanting experience on the backwaters of Kerala. The momentous decision to introduce a new Malayalam era was convened at Kollam and hence the Malayalam calendar came to be known as kollavarsham.",
        
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/640px-Thevally_Palace_20190207155410.jpg",
             "name":"Thevalli Palace"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/24058690533_9e908f3c5b_b_20170923091848.jpg",
             "name":"Jatayu Earth Center"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/583_20190430144107.jpg",
             "name":"Punalur"
         },
         
         {
          "img":"https://th.bing.com/th/id/OIP.z3F-tztN2H4ti_s--6MDkwAAAA?w=202&h=144&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "name":"Thangassery Light House"
        },
        {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/13/fe/28/view-of-the-lake-from.jpg?w=500&h=400&s=1",
            "name":"Sasthamkotta Lake"
        },
        {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/0a/87/thirumullavaram-beach.jpg?w=500&h=-1&s=1",
            "name":"Thirumullavaram Beach"
        },
        ]
      
      
      },  
        { id: 4, name: 'Ernakulam' , "image":"data:image/jpeg;base64,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","paragraph":"Ernakulam is a sprawling metropolis that beautifully combines its natural wonders with providing a base for a majority of the State’s business enterprises. Flanked by the Arabian sea, it is easily among the most visited locations in Kerala. It is an extremely important commercial centre but also has a plethora of destinations for tourists to enjoy. The city of Kochi, with its fine natural harbour, is the undisputed crown jewel of the district. From historic locations that transport you to a time when it acted as the commercial hub of the legendary Spice Route to exotic trips on boats where one can simply relax and soak in the weather, Kochi never disappoints. Ernakulam has always epitomized the Malayali spirit of welcoming all who visit it and this tradition continues to this day.",
        
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/Suspension_bridge_between_Ezhattumukham_and_Thumpoormuzhy_20200207114123.jpeg",
             "name":"Ezhattumugham"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/PavakkulamTempleErnakulam_20200217172700.jpg",
             "name":"Pavakkulam Temple"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/Paniyeli_Poru_-_E0B4AAE0B4BEE0B4A3E0B4BFE0B4AFE0B587E0B4B2E0B4BF_E0B4AAE0B58BE0B4B0E0B58D_02_20200217173931.jpg",
             "name":"Paniyeli Poru"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/29/93/c7/front.jpg?w=500&h=400&s=1",
             "name":"Edappally Church Complex"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bf/86/dc/birds-eye-panoramic-shot.jpg?w=500&h=400&s=1",
            "name":"Puthuvype Beach"
        },
        {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/00/7e/9b/bhoothathankettu-dam.jpg?w=500&h=400&s=1",
            "name":"BhoothathanKettu Dam & Reserve Forest"
        }

        ]
      
      
      
      },
        { id: 5, name: 'Kozhikode',"image":"assets/img/kozhikode.jpg" , "paragraph":"The legendary seaport where Arab, Chinese and East African traders once converged, Kozhikode was previously the most crucial region of the Malabar Coast. Vasco da Gama landed on its shores in 1498, shooting the region to global fame. Once the capital of the influential Zamorins and a prominent trade and commerce centre, the winds of change have swept over this charming coastal land. The whiff of history continues to permeate the lanes, bazaars and business hubs of Kozhikode. Lush green countryside, serene beaches, historic sites, wildlife sanctuaries, rivers and hills make Kozhikode a popular destination.",
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/attr_square/2444.jpg",
             "name":"Backwaters in Kozhikode"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/6170_20201008170555.jpg",
             "name":"Kozhippara Waterfalls"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/shutterstock_720398209_20191111180854_20191111180924.jpg",
             "name":"Thusharagiri Waterfalls"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d5/18/2b/psx-20170319-125048-largejpg.jpg?w=500&h=400&s=1",
             "name":"Kappad Beach"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fe/74/93/kozhippara-waterfalls.jpg?w=500&h=400&s=1",
            "name":"Kozhippara Falls"
        },

        ]     
      
      
      
      },

        { id: 6, name: 'Thrissur' ,image:"assets/img/thrissur.jpg",paragraph:"The cultural capital of Kerala, the Poorams or temple festivals in Thrissur draw in thousands of people every single year as these carnivals encapsulate every single part of Kerala's rich heritage. These are a hotbed of folk art performances and heritage tours that will give you an in depth look into some of the grandest traditions of the State. From majestic elephants to colourful pulikali processions to the world renowned Thrissur Pooram, there is always a festive atmosphere in the air. The district is also the abode of several cultural centres like Kerala Kalamandalam, Sahitya Academy and the Sangeetha Nataka Academy. Thrissur is a place one must visit at least once in their lifetime. The people, swaying with the beats of the chenda, shall help you understand the true heart and spirit of Kerala.",
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/at_20190109034758_20190109034951.jpg",
             "name":"Athirappilly Waterfalls"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/attr_wiki_3642_20191111182143.jpg",
             "name":"Charpa Waterfalls"
         },
         {
           "img":"https://www.holidify.com/images/attr_square/3783.jpg",
             "name":"Vadakkumnnathan Temple"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d9/f9/4f/bible-tower.jpg?w=500&h=400&s=1",
             "name":" Bible Tower"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/74/6a/fa/chavakkad-beach.jpg?w=500&h=400&s=1",
            "name":"Chavakkad Beach"
        },

        ]   
      
      
      
      
      }, 
        { id: 7, name: 'Kannur',image:"assets/img/Kannur.jpg" ,paragraph:"Kannur is most renowned for the Theyyam performances in its temples. This magnificent art form plays an integral part in the culture of this Northern Kerala district. Formerly known as Cannanore, Marco Polo christened it a ‘Great Emporium Of Spice Trade’. Kannur has, since time immemorial, been hailed as an influential sea port. Legend has it that it had interactions and trade relations with the rest of the world since the time of King Solomon to the Greeks, Arabs and Romans. It has a plethora of forts, temples, beaches and wildlife sanctuaries that regularly attract visitors. Major festivals and events are held throughout the year and this is among the best places in Kerala to spend your vacation in.",
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/1024px-Payyambalam_Beach_Back_Water_20180425181108.jpg",
             "name":"Payyambalam Beach"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/Muzhappilangad_Drive-in_Beach_2_20180526213558.jpg",
             "name":"Muzhappilangad Beach"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/arakkal_kettu_museum_kannur20131206112854_84_1_20180517135657.jpg",
             "name":"Arakkal Museum"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d6/de/2b/you-can-either-opt-for.jpg?w=500&h=400&s=1",
             "name":"Kavvayi Islands"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/37/a8/f5/clear-waters.jpg?w=500&h=400&s=1",
            "name":"Ezhara Beach"
        }
       ]
        

      
      
      
      
      },
        { id: 8, name: 'Kasargod',image:"assets/img/kasargod.jpg",paragraph:"The northernmost district of Kerala, Kasaragod is renowned for its hills, forts and water bodies. The coir and handloom industry here are extremely famous around the world. The place is also popular for its ancient temples and rich biodiversity. It is an important border district as well that regulates trade with a lot of neighbouring States. Legends regarding the district greet you at every turn on a visit here. A trip here is incomplete without visiting Bekal Fort, the most majestic and well maintained fort in South India.",
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/5210_20191217132719.jpg",
             "name":"Ranipuram"
         },
         {
           "img":"https://www.holidify.com/images/attr_square/4928.jpg",
             "name":"Malom Wildlife Sanctuary"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/ananthapura-lake-temple_20171219215809.jpg",
             "name":"Ananthapura Lake Temple"
         },
         
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/42/51/31/bekal-fort.jpg?w=500&h=400&s=1",
            "name":"Bekal Fort"
        },
        {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/29/1f/88/kottancheri-hills.jpg?w=500&h=-1&s=1",
            "name":"Kottancheri Hills"
        }
        ]
      
      
      
      
      
      }, 
        { id: 9, name: 'Wayanad',image:"assets/img/wayanad.jpg",paragraph:"Wayanad adorns the northern tip of Kerala and is among the few areas in the world that have managed to conserve their natural charm and beauty. Teeming with rare flora and fauna, it is considered among the most picturesque locations in Kerala. It is host to a large variety of endemic species. One is surrounded by mist-covered peaks and lush greenery on all sides. The tribals of the area are renowned for their unique customs and the festivals here are true celebrations of the harmony between man and nature. Many prominent resorts have come up in this area as well and provide our visitors with many adventure sports and trekking options in the very palms of nature.",

      "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/shutterstock_1140378593_20200116122458_20200116122531.png",
             "name":"Banasura Sagar Dam"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/966_20200529095124.jpg",
             "name":"Wayanad wildlife sanctuary"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/Chembra-Peak-Wayanad_20180119201400.png",
             "name":"Chembra Peak"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/f3/67/entrance-path.jpg?w=500&h=400&s=1",
             "name":"Edakkal Caves"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f9/74/6f/dsc-0298-largejpg.jpg?w=500&h=-1&s=1",
            "name":"Soochippara Falls (Sentinel Rock Waterfall)"
        },
        ]
      
      
      
      },
        { id: 10, name: 'Palakkad',image:"assets/img/Palakkad.jpg" , paragraph:"Celebrated as the Granary of Kerala, Palakkad is a vast stretch of fertile plains interspersed with hills, rivers, mountain streams and forests. The gateway to Kerala from the north, a 40 kilometre break in the mountains known as the Palakkad Gap gives access to this land situated at the foot of the Western Ghats. The pass acts as a corridor between Kerala and the neighbouring Tamil Nadu and played a key role in the trade relations between the east and west coasts of peninsular India. Deriving its name from the Malayalam words Pala (Alsteriascholaris) and Kadu (forest), this place was once a stunning expanse of forest covered with the sweet-scented flowers of the Pala tree. A potpourri of Tamil and Kerala culture, some of the finest Carnatic musicians hail from this district which continues to be a principally agrarian society.",
      
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/cmsuploads/square/8082687818_07fedca0b1_b_20170519134401.jpg",
             "name":"Parambikulam Tiger Reserve"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/SilentValley_20190726115715.jpg",
             "name":"Silent Valley National Park"
         },
         {
           "img":"https://www.holidify.com/images/cmsuploads/square/attr_3149.jpg",
             "name":"Palakkad Fort"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/42/16/a3/malampuzha-dam.jpg?w=500&h=400&s=1",
             "name":"Malampuzha Dam"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7c/99/42/img-5743-largejpg.jpg?w=500&h=400&s=1",
            "name":"Tipu Sultan Fort"
        },
        ]
      
      },
        { id: 11, name: 'Kottayam',image:"assets/img/Kottayam.jpg", paragraph:"Kottayam district is famous for its rich heritage and literary tradition. It is renowned for its spice and rubber trade. Cradled by the backwaters and the Western Ghats, it is epitomised by its stretches of vast greenery, paddy fields and huge rubber plantations. Over five of the State’s leading newspaper publications originate from Kottayam. About four-fifth of books published in the State come from here as well. From trekking hotbeds like Nadukani and Kottathavalam to the rare avian life on display at the Kumarakom Bird Sanctuary, this district encompasses everything that God’s Own Country is famous for. Well connected to the entire State, it is full of interesting historical and cultural locations that tell the tale of how the district was forged into its current form.",
        "spots":
        [
         {
             "img":"https://www.holidify.com/images/attr_square/5062.jpg",
             "name":"Kottathavalam"
         },
         {
           "img":"https://www.holidify.com/images/attr_square/5065.jpg",
             "name":"Nadukani"
         },
         {
           "img":"https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Kottayam_Illikkal_kallu_2_p_640_640.jpg",
             "name":"Illikal Kallu"
         },
         {
           "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/19/ce/79/marmala-waterfall.jpg?w=500&h=-1&s=1",
             "name":" Marmala Waterfall"
         },
         {
          "img":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/29/1d/80/clay-art-cafe-art-gallery.jpg?w=500&h=400&s=1",
            "name":"Clay Art Cafe"
        }
        ]
      
      },  
      ]
constructor(public route:ActivatedRoute){}
ngOnInit(){
    this.getDetails();
}
id:any;
data:any;

getDetails(){
  this.id=this.route.snapshot.params["id"];
  this.data=this.district.filter(d => d.id == this.id)
}

}