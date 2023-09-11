import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardWithForm() {
  return (
    <Card className="w-[350px] md:w-[650px]">
      <CardHeader>
        <CardTitle>WellCome</CardTitle>
        <CardDescription>Hello World</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}
