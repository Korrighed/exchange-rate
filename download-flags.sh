#!/bin/bash

mkdir -p public/flags

flags=(
  "au:au"
  "nz:nz"
  "ca:ca"
  "us:us"
  "fj:fj"
  "sg:sg"
  "th:th"
  "ch:ch"
  "eu:eu"
  "gb:gb"
  "jp:jp"
  "vu:vu"
  "fr:fr"
)

for flag in "${flags[@]}"; do
  code=${flag%:*}
  country=${flag#*:}
  url="https://unpkg.com/flag-icons@7.5.0/flags/4x3/${country}.svg"
  echo "Téléchargement ${code}.svg..."
  curl -s "$url" -o "public/flags/${code}.svg"
done

echo "Drapeaux téléchargés dans public/flags/"
