import { parseURL } from 'ufo'
import Base from "server/data/base"
import { useQuery } from 'h3'
export default async (req) => {
  let { search } = parseURL(req.url)
  const { detail } = useQuery(req);
  if (detail) {
    search=`/${detail}`
  }
  const data: Base = await $fetch(`${useRuntimeConfig().baseApiUrl}/${req.context.params.name}${search}`)
  return data;

}
