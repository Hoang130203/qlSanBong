import { Typography } from "@mui/material";
import NewsItem from "./NewsItem";
import './tt.css'
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
//https://newsapi.org/v2/everything?q=apple&from=2023-12-18&to=2023-12-18&sortBy=popularity&apiKey=39723fcf5f7048ffa82f684c9b0f3184
//https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39723fcf5f7048ffa82f684c9b0f3184
function TinTuc() {
    const [news, setNews] = useState([{
        "source": {
            "id": null,
            "name": "Turbo.fr"
        },
        "author": "Clément Doucet",
        "title": "Pas de jaloux, Kia propose son propre bonus écologique",
        "description": "Non éligible au bonus écologique 2024, Kia a décidé de lancer sa propre ristourne.  Ainsi, jusqu'au 31 décembre 2023, toute commande du Kia Niro EV sera synonyme d'une ristourne de 5.000 €.\nLe constructeur Kia est l'un des grands perdants du nouveau bonus éco…",
        "url": "https://www.turbo.fr/kia/niro/actualites-auto/pas-de-jaloux-kia-propose-son-propre-bonus-ecologique-193176",
        "urlToImage": "https://www.turbo.fr/sites/default/files/2023-12/kia.jpg",
        "publishedAt": "2023-12-18T09:27:58Z",
        "content": "Non éligible au bonus écologique 2024, Kia a décidé de lancer sa propre ristourne.  Ainsi, jusqu'au 31 décembre 2023, toute commande du Kia Niro EV sera synonyme d'une ristourne de 5.000 .\r\nLe constr… [+1274 chars]"
    }])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=39723fcf5f7048ffa82f684c9b0f3184')
            .then((response) => {
                setNews(response.data.articles.slice(0, 10))
            })
    }, [])
    return (
        <Fragment>
            {
                news.map((item, index) => (
                    <NewsItem news={item} />
                ))
            }
        </Fragment>
    )
}

export default TinTuc;