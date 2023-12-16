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
        { id: 4, name: 'Ernakulam' , "image":"assets/img/Ernakulam.jpg","paragraph":"Ernakulam is a sprawling metropolis that beautifully combines its natural wonders with providing a base for a majority of the State’s business enterprises. Flanked by the Arabian sea, it is easily among the most visited locations in Kerala. It is an extremely important commercial centre but also has a plethora of destinations for tourists to enjoy. The city of Kochi, with its fine natural harbour, is the undisputed crown jewel of the district. From historic locations that transport you to a time when it acted as the commercial hub of the legendary Spice Route to exotic trips on boats where one can simply relax and soak in the weather, Kochi never disappoints. Ernakulam has always epitomized the Malayali spirit of welcoming all who visit it and this tradition continues to this day.",
        
      
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