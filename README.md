# Ians-Daily-Predictions
Website that displays my daily predictions for baseball players, specifically hitters. It shows my top five picks for hitters that I think will do well, and my top five hitters that I think will do poorly.

## How It Works:
Fetches information from json file hosted at [https://s3.amazonaws.com/scrapy.crawled.data/MLBPlayerPredictions/data.json](https://s3.amazonaws.com/scrapy.crawled.data/MLBPlayerPredictions/data.json). This json file is updated daily using a Scrapy Python spider that scrapes players from [https://baseballsavant.mlb.com/](https://baseballsavant.mlb.com/) that currently have a large difference between their xWOBA and WOBA statistics.

## Other Information:
- An up to date version of this website is hosted in [this AWS S3 bucket](https://s3.amazonaws.com/hosting.web/MLBPredictionsProject/index.html).
- This project uses data scraped using a Scrapy spider in the [Ians-Player-Predictions-Spider](https://github.com/ianwood103/Ians-Daily-Predictions-Spider) repository.
