import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react"

const videos = [
  {
    img: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    text: "Language English",
  },
  {
    img: "https://images.pexels.com/photos/861308/pexels-photo-861308.jpeg",
    text: "Language Hindi",
  },
  {
    img: "https://images.pexels.com/photos/709234/pexels-photo-709234.jpeg",
    text: "Language others",
  },
]

export default function VideoCardSection() {
  return (
    <div className="bg-[#2b0070] py-16 px-4 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Our All Language Videos</h2>
        <p className="mt-2 text-lg text-white/80">
          It is a long established fact that a reader will be distracted by the readable
        </p>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <Card key={idx} className="relative group w-[300px] h-[200px] overflow-hidden">
              <img
                src={video.img}
                alt={video.text}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <CardContent className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle className="text-yellow-400 w-12 h-12" />
              </CardContent>
              <div className="absolute bottom-2 left-3 text-yellow-400 text-lg font-semibold">
                {video.text}
              </div>
            </Card>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <Button className="bg-black text-white hover:bg-gray-800">
            <ArrowLeft />
          </Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
