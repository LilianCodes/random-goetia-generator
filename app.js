const BASE_URL = "https://ars-goetia-api.onrender.com";

async function getRandomGoetic() {
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const ennElem = document.getElementById('enn');
    const sigilElem = document.getElementById('sigil');

    await fetch(`${BASE_URL}/goetia/random`)
            .then(res => {
                if (!res.ok) throw new Error(`Error fetching: ${res}`)
                return res.json()
            })
            .then(data => {
                const goeticName = data['name'];
                const goeticId = data['id'];
                const rank = data['rank']['rank-name'];
                const desc = data['description'];
                const enn = data['enn'];
                const sigil = data['sigil'];

                name.innerHTML = `${goeticId} // ${goeticName} - ${rank} of Hell`;
                sigilElem.src = `${sigil}`;
                ennElem.innerHTML = `${enn}`;
                description.innerHTML = `${desc}`;
            })
            .catch(e => {
                console.error(`Error: ${e}`);
            });
}