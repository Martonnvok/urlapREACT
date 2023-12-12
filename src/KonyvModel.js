class KonyvModel {
    
    #konyvekTomb = [];
    #responseClone;

    getKonyvek() {

        return this.#konyvekTomb;

    }

    adatBe(vegpont, callback) {

        fetch(vegpont, {

            method: "GET",

            headers: {

                "Content-Type": "application/json",

            },

        })

            .then((response) => {

                this.#responseClone = response.clone(); // 2 

                return response.json();

            })

            .then((data) => {

                this.#konyvekTomb = data;

                callback(data);

            })

            .catch((rejectionReason) => {

                // 3 

                console.log(

                    "Error parsing JSON from response:",

                    rejectionReason,

                    this.#responseClone

                ); // 4 

                this.#responseClone

                    .text() // 5 

                    .then(function (bodyText) {

                        console.log(

                            "Received the following instead of valid JSON:",

                            bodyText

                        ); // 6 

                    });

            });

    }

} 