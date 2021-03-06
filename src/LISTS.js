

class List {

    constructor() {

    this.search = this.search.bind(this)
    
    this.list = []
}


search (query, number) {

    let searchQuery = query.toLowerCase()

    let result = this.list.filter(item => {

       let searchItem  = item.toLowerCase()
        

        return searchItem.search(searchQuery) !== -1
    })

    //Returns only 'number' items
    let trimmedResults = result.slice(0, number)

    return trimmedResults;
}

}

class Styles extends List {
    constructor () {
        super ()

        this.list = ["Rock", "Country", "Alternative", "Metal", "Hip Hop", "Classical"]
    }
}

class Instruments extends List {

    constructor () {
        super ()

        this.list = ["Guitar", "Bass guitar", 
                    "Drums", "Violin", "Flute", "Piano", 
                    "Keyboard", "Keytar", "Kazoo", "Triangle",
                    "Shamisen"]
    }
}

class Cities extends List {
    constructor () {
        super () 

        this.list = ["Abbotsford, Canada",
"Airdrie, Canada",
"Ajax, Canada",
"Alma, Canada",
"Amos, Canada",
"Anmore, Canada",
"Baie-Comeau, Canada",
"Barrie, Canada",
"Beaconsfield, Canada",
"Belleville, Canada",
"Beloeil, Canada",
"Blainville, Canada",
"Boisbriand, Canada",
"Boucherville, Canada",
"Bradford West Gwillimbury, Canada",
"Brampton, Canada",
"Brandon, Canada",
"Brant, Canada",
"Brantford, Canada",
"Brockville, Canada",
"Brossard, Canada",
"Burlington, Canada",
"Burnaby, Canada",
"Calgary, Canada",
"Cambridge, Canada",
"Campbell River, Canada",
"Camrose, Canada",
"Candiac, Canada",
"Chambly, Canada",
"Charlottetown, Canada",
"Châteauguay, Canada",
"Chilliwack, Canada",
"Clarence-Rockland, Canada",
"Cobourg, Canada",
"Cochrane, Canada",
"Collingwood, Canada",
"Conception Bay South, Canada",
"Coquitlam, Canada",
"Corner Brook, Canada",
"Cornwall, Canada",
"Côte-Saint-Luc, Canada",
"Courtenay, Canada",
"Cranbrook, Canada",
"Dartmouth, Canada",
"Delta, Canada",
"Deux-Montagnes, Canada",
"Dieppe, Canada",
"Dollard-Des Ormeaux, Canada",
"Dorval, Canada",
"Drummondville, Canada",
"Duncan, Canada",
"Edmonton, Canada",
"Etobicoke, Canada",
"Fort Erie, Canada",
"Fort McMurray, Canada",
"Fort St. John, Canada",
"Fredericton, Canada",
"Gatineau, Canada",
"Glace Bay, Canada",
"Granby, Canada",
"Grande Prairie, Canada",
"Greater Sudbury, Canada",
"Greater Napanee, Canada",
"Guelph, Canada",
"Hamilton, Canada",
"Huntsville, Canada",
"Joliette, Canada",
"Kamloops, Canada",
"Kelowna, Canada",
"Keswick, Canada",
"Kingston, Canada",
"Kirkland, Canada",
"Kitchener, Canada",
"Langford, Canada",
"Langley, Canada",
"Langley, Canada",
"La Prairie, Canada",
"L'Assomption, Canada",
"Laval, Canada",
"Leduc, Canada",
"Lethbridge, Canada",
"Lloydminster, Canada",
"London, Canada",
"Longueuil, Canada",
"Magog, Canada",
"Maple Ridge, Canada",
"Markham, Canada",
"Mascouche, Canada",
"Medicine Hat, Canada",
"Midland, Canada",
"Milton, Canada",
"Mirabel, Canada",
"Miramichi, Canada",
"Mississauga, Canada",
"Moncton, Canada",
"Montréal, Canada",
"Mont-Royal, Canada",
"Mont-Saint-Hilaire, Canada",
"Moose Jaw, Canada",
"Mount Pearl, Canada",
"Nanaimo, Canada",
"New Glasgow, Canada",
"Newmarket, Canada",
"New Westminster, Canada",
"Niagara Falls, Canada",
"Norfolk County, Canada",
"North Battleford, Canada",
"North Bay, Canada",
"North Cowichan, Canada",
"North Vancouver, Canada",
"North York, Canada",
"Oak Bay, Canada",
"Oakville, Canada",
"Orangeville, Canada",
"Orillia, Canada",
"Oshawa, Canada",
"Ottawa, Canada",
"Owen Sound, Canada",
"Parksville, Canada",
"Pembroke, Canada",
"Penticton, Canada",
"Petawawa, Canada",
"Peterborough, Canada",
"Pickering, Canada",
"Pitt Meadows, Canada",
"Pointe-Claire, Canada",
"Port Alberni, Canada",
"Port Colborne, Canada",
"Port Moody, Canada",
"Prince Albert, Canada",
"Prince Edward, Canada",
"Prince George, Canada",
"Quinte West, Canada",
"Rayside-Balfour, Canada",
"Red Deer, Canada",
"Regina, Canada",
"Repentigny, Canada",
"Richmond, Canada",
"Richmond Hill, Canada",
"Rouyn-Noranda, Canada",
"Saguenay, Canada",
"Saint-Basile-le-Grand, Canada",
"Saint-Bruno-de-Montarville, Canada",
"Saint-Constant, Canada",
"Sainte-Catherine, Canada",
"Sainte-Julie, Canada",
"Sainte-Thérèse, Canada",
"Saint-Eustache, Canada",
"Saint-Hyacinthe, Canada",
"Saint-Jean-sur-Richelieu, Canada",
"Saint-Jérôme, Canada",
"Saint John, Canada",
"Saint-Laurent, Canada",
"Saint-Lazare, Canada",
"Saint-Léonard, Canada",
"Salaberry-de-Valleyfield, Canada",
"Salmon Arm, Canada",
"Sarnia, Canada",
"Saskatoon, Canada",
"Sault Ste. Marie, Canada",
"Sept-Îles, Canada",
"Shawinigan, Canada",
"Sherbrooke, Canada",
"Sherwood Park, Canada",
"Sorel-Tracy, Canada",
"Spruce Grove, Canada",
"St. Albert, Canada",
"St. Catharines, Canada",
"Stratford, Canada",
"St. Thomas, Canada",
"Surrey, Canada",
"Terrace, Canada",
"Terrebonne, Canada",
"Thorold, Canada",
"Thunder Bay, Canada",
"Timmins, Canada",
"Toronto, Canada",
"Trois-Rivières, Canada",
"Truro, Canada",
"Val-d'Or, Canada",
"Vancouver, Canada",
"Varennes, Canada",
"Vaudreuil-Dorion, Canada",
"Vaughan, Canada",
"Vernon, Canada",
"Victoria, Canada",
"Victoriaville, Canada",
"Waterloo, Canada",
"Welland, Canada",
"West End, Canada",
"Westmount, Canada",
"Whitehorse, Canada",
"White Rock, Canada",
"Windsor, Canada",
"Winnipeg, Canada",
"Woodstock, Canada",
"Yellowknife, Canada",
"Yorkton, Canada",
"Halifax, Canada",
"St. John's, Canada",
"Québec, Canada",
"Lévis, Canada",
"Rimouski, Canada",
"Rivière-du-Loup, Canada",
"Sydney, Canada",
"L'Ancienne-Lorette, Canada",
"Edmundston, Canada",
"Thetford-Mines, Canada",
"Scarborough, Canada",
"Cole Harbour, Canada",
"Okanagan, Canada",
"West Kelowna, Canada",
"Bellechasse Regional County Municipality, Canada",
"Jonquière, Canada",
"Saint-Augustin-de-Desmaures, Canada",
"Ladner, Canada",
"Walnut Grove, Canada",
"Ancaster, Canada",
"West Vancouver, Canada",
"Willowdale, Canada",
"Lower Sacvkille, Canada"]
    }
}


export {Instruments, Cities, Styles}