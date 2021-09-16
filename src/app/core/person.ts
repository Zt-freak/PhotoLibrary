export class Person {
    name: Name = {
        title: "",
        first: "",
        last: ""
    };
    picture: Picture = {
        large: "",
        medium: "",
        thumbnail: ""
    };
    location: Location = {
        street: new Street(),
        city: "",
        state: "",
        country: "",
    };
    email: string = "";

}

class Name {
    title: string = "";
    first: string = "";
    last: string = "";
}

class Picture {
    large: string = "";
    medium: string = "";
    thumbnail: string = "";
}

class Location {
    street: Street = new Street();
    city: string = "";
    state: string = "";
    country: string = "";
}

class Street {
    number: number = 0;
    name: string = "";
}