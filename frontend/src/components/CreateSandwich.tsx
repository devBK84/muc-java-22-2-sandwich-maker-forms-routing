import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

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
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addSandwich(sandwich)


    }

    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const fieldName = event.target.name
        const fieldType = event.target.type
        const fieldValue = fieldType !== "checkbox" ? event.target.value : event.target.checked

        setSandwich(prevState => ({
            ...prevState, [fieldName]: fieldValue


        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                What you want:
                <input type={"text"}
                       name={"id"}
                       value={sandwich.id}
                       onChange={handleChange}
                /> <br/>
                Name:
                <input name={"name"}
                       type={"text"}
                       value={sandwich.name}
                       onChange={handleChange}
                /><br/>
                Patty:
                <input name={"patty"}
                       type={"text"}
                       value={sandwich.patty}
                       onChange={handleChange}
                /><br/>
                Number of Patty:
                <input name={"numberOfPatties"}
                       type={"number"}
                       value={sandwich.numberOfPatties}
                       onChange={handleChange}
                /><br/>
                Grilled?
                <input name={"grilled"}
                       type={"checkbox"}
                       checked={sandwich.grilled}
                       onChange={handleChange}
                /><br/>
                Extra Wishes:
                <input name={"extraWishes"}
                       type={"text"}
                       value={sandwich.extraWishes}
                       onChange={handleChange}
                /><br/>
                <button>Bestellung hinzufügen</button>
            </form>
            {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}