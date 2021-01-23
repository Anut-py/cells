import { Component } from '@angular/core';
import { CellPartModel } from './cell-part';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    animalCellParts: CellPartModel[] = [
        {
            name: 'Nucleus',
            description: `The nucleus is essentially the control center of a cell. The nucleus also stores
            the DNA of a cell, which contains genetic material. Genetic material means something that defines
            your traits (eye color, height, etc). The nucleus is like the mayor of a city because the mayor
            controls a city.`,
            modelName: 'nucleus',
        },
        {
            name: 'Mitochondria',
            description: `Mitochondria convert food into energy. Mitochondria are extremely important for a
            cell's survival, because without mitochondria a cell wouldn't have energy, and it would die.
            Mitochondria are like factories in a city because factories generate energy and so do mitochondria.`,
            modelName: 'mitochondrion',
        },
        {
            name: 'Cytoplasm',
            description: `A cell's cytoplasm is a jelly-like liquid that holds all the organelles of the cell.
            The cytoplasm is made mostly of water, just like all living things. A cell's cytoplasm is like the
            sidewalks and roads in a city because they are in between buildings, just like the cytoplasm is in
            between organelles.`,
            modelName: 'animal_cell',
        },
        {
            name: 'Vacuole',
            description: `A vacuole is an organelle that stores water and food for later use. In animal cells,
            there are many different vacuoles scattered across the cell. In plant cells, there is one huge
            central vacuole where food, water, etc. are stored. Vacuoles are like warehouses in a city because
            ware houses store stuff like vacuoles do.`,
            modelName: 'vacuole',
        },
        {
            name: 'Cell membrane',
            description: `The cell membrane is on the outside of a cell. It holds the cell together, and lets water
            and food get in the cell, and lets waste go out. The cell membrane is like gates on the outside of a city
            because gates let people in and out of the city.`,
            modelName: 'animal_cell',
        },
    ];

    plantCellParts: CellPartModel[] = [
        {
            name: 'Nucleus',
            description: `The nucleus is essentially the control center of a cell. The nucleus also stores
            the DNA of a cell, which contains genetic material. Genetic material means something that defines
            your traits (eye color, height, etc). The nucleus is like the mayor of a city because the mayor
            controls a city.`,
            modelName: 'nucleus',
        },
        {
            name: 'Mitochondria',
            description: `Mitochondria convert food into energy. Mitochondria are extremely important for a
            cell's survival, because without mitochondria a cell wouldn't have energy, and it would die.
            Mitochondria are like factories in a city because factories generate energy and so do mitochondria.`,
            modelName: 'mitochondrion',
        },
        {
            name: 'Cytoplasm',
            description: `A cell's cytoplasm is a jelly-like liquid that holds all the organelles of the cell.
            The cytoplasm is made mostly of water, just like all living things. A cell's cytoplasm is like the
            sidewalks and roads in a city because they are in between buildings, just like the cytoplasm is in
            between organelles.`,
            modelName: 'plant_cell',
        },
        {
            name: 'Vacuole',
            description: `A vacuole is an organelle that stores water and food for later use. In animal cells,
            there are many different vacuoles scattered across the cell. In plant cells, there is one huge
            central vacuole where food, water, etc. are stored. Vacuoles are like warehouses in a city because
            ware houses store stuff like vacuoles do.`,
            modelName: 'vacuole',
        },
        {
            name: 'Cell membrane',
            description: `The cell membrane is on the outside of a cell. It holds the cell together, and lets water
            and food get in the cell, and lets waste go out. The cell membrane is like gates on the outside of a city
            because gates let people in and out of the city.`,
            modelName: 'plant_cell',
        },
        {
            name: 'Cell wall',
            description: `The cell wall is found only in plants. The cell wall is a rigid structure that functions
            mostly like a cell membrane. The cell wall is stronger than a cell membrane, so plant cells have shape,
            while animal cells don't. The cell wall is like a wall around a city.`,
            modelName: 'plant_cell',
        },
        {
            name: 'Chloroplasts',
            description: `Chloroplasts are organelles that perform photosyntesis. They are found only in plant cells.
            Photosynthesis is the process of converting energy into food, and converting the food back to energy, and
            so on. This works because photosynthesis produces more food than the energy used to make that food. Chloroplasts
            are like a farm in a city because farms produce food, which is then consumed.`,
            modelName: 'chloroplast',
        },
    ];

    selectedPart: CellPartModel;

    selectPart(part: CellPartModel): void {
        this.selectedPart = part;
    }
}
