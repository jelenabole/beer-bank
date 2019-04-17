export class Beer {
    id: number;
    image_url: String;
    name: String;
    tagline: String;

    ibu: number;
    abv: number;
    ebc: number;
    description: String;
    food_pairing: Array<String>;

    attenuation_level: number;
    boil_volume: BoilVolume;
    brewer_tips: String;
    contributed_by: String;
    first_brewed: String;
    
    ingredients: Ingredients;
    method: Method;

    ph: number;
    srm: number;
    target_fg: number;
    target_og: number;
    volume: Volume;
}

// Amount = also a base class for several other classes:
class Amount {
    value: number;
    unit: String;
}

class BoilVolume extends Amount {}

// ingredients:
class Ingredients {
    malt: Array<Malt>;
    hops: Array<Hop>;
    yeast: String;
}
class Hop {
    add: String;
    amount: Amount;
    attribute: String;
    name: String;
}
class Malt {
    amount: Amount;
    name: String;
}


// method:
class Method {
    mash_temp: Array<MashTemp>;
    fermentation: Fermantation;
    twist: null;
}
class Fermantation {
    temp: Temperature;
}
class Temperature extends Amount {}
class MashTemp {
    duration: number;
    temp: Temperature;
}

class Volume extends Amount {}