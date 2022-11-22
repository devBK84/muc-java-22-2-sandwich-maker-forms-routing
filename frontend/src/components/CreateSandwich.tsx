import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)


    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/

    /*
    * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/


    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const fieldName = event.target.name
        const fieldName = event.target.type
        setSandwich(prevState => ({

            ...prevState, [fieldName]: fieldName !== event.target.value : event.target.checked
        }))
    }

    function handleSubmit(event: FormEvent<HTMLInputElement>) {
        event.preventDefault();
        alert(sandwich)
    }

    return (
        <div>
            <form>
                <input type={"text"}
                       name={"id"}
                       value={sandwich.id}
                       onChange={handleChange}
                />
                <input name={"burger"}
                       type={"text"}
                       value={sandwich.name}
                       onChange={handleChange}
                />
                <input name={"petty"}
                       type={"text"}
                       value={sandwich.patty}
                       onChange={handleChange}
                />
                <input name={"NumberOfPetty"}
                       type={"number"}
                       value={sandwich.numberOfPatties}
                       onChange={handleChange}
                />
                <input name={"gegrillt"}
                       type={"checkbox"}
                       checked={sandwich.grilled}
                       onChange={handleChange}
                />
                <input name={"Sesambums"}
                       type={"text"}
                       value={sandwich.extraWishes}
                       onChange={handleChange}
                />
            </form>
            {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
            <button onClick={() => props.addSandwich(sandwich)}>Bestellung hinzufügen</button>
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}