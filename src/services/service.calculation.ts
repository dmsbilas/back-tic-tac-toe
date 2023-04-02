export class Calculation{
    private static calc : Calculation ;

    private constructor(){};

    public static GetInstance(){
        if( !Calculation.calc ){
            Calculation.calc = new Calculation();
        }
        return Calculation.calc;
    }

    public Add(a : number, b : number){
        return a + b ;
    }

    public GetRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}