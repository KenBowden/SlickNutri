new Vue({






        el: '#app',
        data: {

            //1= male, 2=female

            sex: '',
		feet: '',
		inch: '',
		lbs: '',
		ActLevel: '',
		age: '',

//    public centimeters: number;
//    public weight: number;
//    public ActivityLevel: number;
//
//
//
//
//    //Macros
//    public starch: number;
//    public sugar: number;
//    public protien: number;
//    public fat: number;
//    public water: number;
//
//
//    //Vitamins
//
//    public VA: number;
//    public VC: number;
//    public VE: number;
//    public sodium: number;
//    public fiber: number;
//
//
//    //personal
//    public location: string;
        },



        computed:{

        cal: function(){
        var act = 0;
        switch(this.ActLevel) {
            case 1:
                act = 1.2;
            break;
            case 2:
            act = 1.55
             break;
            case 3:
            act = 1.7
            break;
            default:
            act = 0;
}


        var cal = 0;

        var cm = ( this.feet   +  (this.inch / 12) ) * 30.48;

        if(this.sex === "Female"){



            cal =  10 * (this.lbs * .453592) + 6.25 * cm - 5 * this.age - 161 * act;
            cal = cal * act;
        }
        if(this.sex === "Male"){

            cal =  10 * (this.lbs * .453592) + 6.25 * cm - 5 * this.age + 5 * act;
            cal = cal * act;
        }

        if(cal > 1000)
            return Math.round(cal) ;
        },

        vaRec: function(){

        if(this.sex === "Male"){

        return 1500;

        }

        if(this.sex === "Female"){

        return 1220;

        }


        },

        vcRec: function(){

        if(this.sex === "Male"){

        return 220;

        }

        if(this.sex === "Female"){

        return 190;

        }


        },

        sodiumRec: function(){return 1600;},

        veRec: function(){

        if(this.sex === "Male"){

        return 19;

        }

        if(this.sex === "Female"){

        return 14;

        }


        },

        waterRec: function(){

        if(this.sex === "Male"){

        return 13;

        }

        if(this.sex === "Female"){

        return 9;

        }


        },

        fiberRec: function(){

        if(this.sex === "Male"){

        return 38;

        }

        if(this.sex === "Female"){

        return 28;

        }
},

        fatRec: function(){



            return Math.round( parseInt(this.cal) * .25 / 9);

        },



        proteinRec: function(){

        return Math.round( (parseInt(this.cal) * .20 ) / 4);

        },


        waterRec: function(){

        if(this.sex === "Male"){

        return 13;

        }

        if(this.sex === "Female"){

        return 9;

        }

        },

        waterRec: function(){

        if(this.sex === "Male"){

        return 13;

        }

        if(this.sex === "Female"){

        return 9;

        }


},
        sugarRec: function(){

        return ( parseInt( this.cal) * .05) / 4;

        }

    }})