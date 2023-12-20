import { Typography } from "@mui/material";
import NewsItem from "./NewsItem";
import './tt.css'
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
//https://newsapi.org/v2/everything?q=apple&from=2023-12-18&to=2023-12-18&sortBy=popularity&apiKey=39723fcf5f7048ffa82f684c9b0f3184
//https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39723fcf5f7048ffa82f684c9b0f3184
function TinTuc() {
    const [news, setNews] = useState([
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Ian Duncan",
            "title": "Transportation Department fines Southwest $140 million for Christmas meltdown - The Washington Post",
            "description": "The Transportation Department fined Southwest Airlines $140 million for what it said were multiple violations of the law during its meltdown around last Christmas and New Year’s, while also ordering the airline to establish a $90 million fund to compensate pa…",
            "url": "https://www.washingtonpost.com/transportation/2023/12/18/southwest-airlines-meltdown-fine/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/H2MP3ZENDII63ODKFY5HOM3LRY_size-normalized.jpg&w=1440",
            "publishedAt": "2023-12-18T12:07:47Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nThe Transportation Department fined Southwest Airlines $140 million for what it said were multiple violations of the law during its me… [+5355 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "EU opens formal DSA investigation into X in wake of Israel-Hamas war - The Verge",
            "description": "X may have broken the European Union’s tough new Digital Service Act rules, the European Commission said as it announced the opening of a formal investigation.",
            "url": "https://www.theverge.com/2023/12/18/24005947/eu-x-twitter-dsa-formal-investigation-hamas-israel-terrorist-attacks",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/97YL7dtY5kymZmxnO1yixsQA7HI=/0x0:3001x2001/1200x628/filters:focal(1501x1001:1502x1002)/cdn.vox-cdn.com/uploads/chorus_asset/file/24805884/STK160_X_Twitter_002.jpg",
            "publishedAt": "2023-12-18T11:40:10Z",
            "content": "EU opens formal DSA investigation into X in wake of Israel-Hamas war\r\nEU opens formal DSA investigation into X in wake of Israel-Hamas war\r\n / Following a preliminary investigation, the EU thinks X m… [+3362 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox Business",
            "title": "New 'coffee badging' job trend has some business leaders on high alert - New York Post ",
            "description": "As more firms call employees back into the office, some workers are expressing their clear distaste.",
            "url": "https://nypost.com/2023/12/18/business/new-coffee-badging-job-trend-has-some-business-leaders-on-high-alert/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/12/Coffee-badging.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-12-18T11:35:00Z",
            "content": "In post-pandemic times, many employers and companies are continuing to mandate a return to the office for their workers and some employees are responding with a particular form of pushback. \r\nFirst, … [+6017 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "fox8.com"
            },
            "author": "Danielle Langenfeld",
            "title": "Local Giant Eagle sells $500k lottery ticket - WJW FOX 8 News Cleveland",
            "description": "One very lucky person in Akron turned a $10 scratch-off ticket into several hundred thousand dollars",
            "url": "https://fox8.com/news/local-giant-eagle-sells-500k-lottery-ticket/",
            "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2021/11/giant-eagle-curbside.jpg?w=1280",
            "publishedAt": "2023-12-18T11:21:54Z",
            "content": "CUYAHOGA FALLS, Ohio (WJW) – One very lucky person in Akron turned a $10 scratch-off ticket into several hundred thousand dollars. \r\nOhio Lottery officials only identified the winner as “Clarence fro… [+277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ussteel.com"
            },
            "author": null,
            "title": "Nippon Steel Corporation (NSC) to Acquire U. S. Steel, Moving Forward Together as the 'Best Steelmaker with World-Leading Capabilities' - U.S. Steel",
            "description": "NSC to acquire U. S. Steel for $55.00 per share in an all-cash transaction representing 40% premium, providing certain and immediate value to U.…...",
            "url": "https://investors.ussteel.com/news-events/news-releases/detail/659/nippon-steel-corporation-nsc-to-acquire-u-s-steel",
            "urlToImage": "https://d1io3yog0oux5.cloudfront.net/_597a67cc6a8b0b4a7eb94d7dc95d5e2f/ussteel/db/3215/29038/social_image_resized.jpg",
            "publishedAt": "2023-12-18T11:02:29Z",
            "content": "NSC to acquire U. S. Steel for $55.00 per share in an all-cash transaction representing 40% premium, providing certain and immediate value to U. S. Steel shareholders\r\nBrings together two storied com… [+23581 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Colby Smith",
            "title": "Federal Reserve's Loretta Mester says markets a 'bit ahead' of central bank on rate cuts - Financial Times",
            "description": "Cleveland official is latest to try to calm the investor exuberance driving up stocks and bonds",
            "url": "https://www.ft.com/content/ad029db4-d758-49a5-a38a-e505956e6784",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fb0f3419a-86a3-46de-8dbb-357f47f38c4a.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-12-18T11:00:30Z",
            "content": "A top official at the Federal Reserve has warned that financial markets had jumped a little bit ahead by pencilling in early interest rate cuts next year, the latest attempt by the US central bank to… [+3451 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Helen Partz",
            "title": "Spot Bitcoin ETF will be 'bloodbath' for crypto exchanges, analyst says - Cointelegraph",
            "description": "Once approved, a spot Bitcoin ETF in the U.S. would be a “bloodbath” for cryptocurrency exchanges, according to ETF Store president Nate Geraci.",
            "url": "https://cointelegraph.com/news/spot-bitcoin-etf-bloodbath-cex",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-12/f0d29fff-f47d-4656-a209-9839ebdaf277.jpg",
            "publishedAt": "2023-12-18T10:41:12Z",
            "content": "While the crypto community eagerly awaits the possible approval of a spot Bitcoin (BTC) exchange-traded fund (ETF) in the United States, some analysts are warning this could potentially trigger unwan… [+2594 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Alistair Barr",
            "title": "Elon Musk may take page from Ferrari playbook with Tesla's Cybertruck - Business Insider",
            "description": "Limited Cybertruck supply in 2024 and 2025 could create scarcity value and help Tesla gauge demand for the complex and controversial vehicle.",
            "url": "https://www.businessinsider.com/elon-musk-taking-page-from-ferrari-playbook-with-cybertruck-2023-12",
            "urlToImage": "https://i.insider.com/657d0c3350edbc52a8650522?width=1200&format=jpeg",
            "publishedAt": "2023-12-18T10:00:00Z",
            "content": "Tesla will probably sell every single Cybertruck it makes in 2024 and 2025. That may not amount to many vehicles, though.\r\nCEO Elon Musk could be taking a page from Ferrari's playbook by limiting sup… [+3600 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "How May Mobility went fully driverless while avoiding the pitfalls of robotaxis - The Verge",
            "description": "May Mobility is launching a driverless service in Arizona amid a challenging time for self-driving cars. The company’s business model is different from robotaxi ventures.",
            "url": "https://www.theverge.com/24001741/may-mobility-driverless-service-microtransit-robotaxi",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/pkFBr_iyPY-68s97CIC46j7Ia2w=/0x0:4000x2250/1200x628/filters:focal(2000x1125:2001x1126)/cdn.vox-cdn.com/uploads/chorus_asset/file/25165561/May_Mobility_Sun_City_.JPG",
            "publishedAt": "2023-12-18T10:00:00Z",
            "content": "How May Mobility went fully driverless while avoiding the pitfalls of robotaxis\r\nHow May Mobility went fully driverless while avoiding the pitfalls of robotaxis\r\n / The company is launching a rider o… [+4995 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Illumina to divest cancer test maker Grail after antitrust battles - Reuters",
            "description": null,
            "url": "https://www.reuters.com/markets/deals/illumina-divest-cancer-test-maker-grail-2023-12-17/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:53:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Sandali Handagama",
            "title": "FTX Files Reorganization Plan to End Bankruptcy - CoinDesk",
            "description": "Asset values for creditor claims will be calculated at prices on the day FTX filed for bankruptcy in November 2022, the plan says.",
            "url": "https://www.coindesk.com/business/2023/12/18/ftx-files-reorganization-plan-to-end-bankruptcy/",
            "urlToImage": "https://www.coindesk.com/resizer/EtdNWBj7QgaltkTCfggbLnbiouI=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/G2X34JKNG5D4ZHEB4OGMRTMB4M.jpg",
            "publishedAt": "2023-12-18T09:36:00Z",
            "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nio.com"
            },
            "author": "Investor Relations | NIO Inc.",
            "title": "NIO Inc. Announces US$2.2 Billion Strategic Equity Investment from CYVN | NIO Inc. - Investor Relations | NIO Inc.",
            "description": null,
            "url": "https://ir.nio.com/news-releases/news-release-details/nio-inc-announces-us22-billion-strategic-equity-investment-cyvn",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:34:11Z",
            "content": null
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Goldman's Kostin Lifts S&P 500 Forecast a Month After Setting It - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/news/articles/2023-12-18/goldman-s-kostin-lifts-s-p-500-forecast-a-month-after-setting-it",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:31:06Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "SamMobile, Asif Iqbal Shaik",
            "title": "China bans Apple and Samsung phones from government offices and firms - SamMobile - Samsung news",
            "description": "As tensions between China and the US escalate, the two countries are trying to counter each other through certain measures. ...",
            "url": "https://www.sammobile.com/news/china-bans-apple-iphone-samsung-phones-government-offices-firms/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/08/Samsung-Galaxy-Z-Flip-5-Fold-5-China-720x405.jpg",
            "publishedAt": "2023-12-18T09:07:00Z",
            "content": "As tensions between China and the US escalate, the two countries are trying to counter each other through certain measures. The USA banned US-based chipmakers from exporting advanced chips and chip m… [+2001 chars]"
        }

    ])
    /*
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=39723fcf5f7048ffa82f684c9b0f3184')
            .then((response) => {
                setNews(response.data.articles.slice(0, 12))
            })
    }, [])*/
    return (
        <Fragment>
            {
                news.map((item, index) => (
                    <NewsItem news={item} key={index} />
                ))
            }
        </Fragment>
    )
}

export default TinTuc;