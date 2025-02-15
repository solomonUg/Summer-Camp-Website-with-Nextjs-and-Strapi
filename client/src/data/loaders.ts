import * as qs from 'qs';
import { fetchAPI } from "@/utils/fetchApi";
import { getStrapiURL } from "@/utils/getStrapiURL";




const homePageQuery = qs.stringify(
    {
        populate: {
          "Blocks": {
            on: {
              "blocks.hero-section": {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                  logo: {
                    populate: {
                      image: {
                        fields: ["url", "alternativeText"],
                      },
                    },
                  },
                  cta: true,
                },
              },
              "blocks.info-block": {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                  cta: true,
                },
              },
            },
          },
        },
      } 
)

export async function getHomePage() {
    const path = "/api/home-page";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);
    url.search = homePageQuery;
    return await fetchAPI(url.href, {method: "GET"})
} 
