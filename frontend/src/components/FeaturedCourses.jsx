import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const courses = [
  { lang: "Chinese", flag1: "/assets/flag-1.png" },
  { lang: "English", flag: "/assets/flag-2.png" },
  { lang: "French", flag: "/assets/flag-3.png" },
  { lang: "German", flag: "/assets/flag-4.png" },
  { lang: "Japanese", flag: "/assets/flag-5.png" },
  { lang: "Spanish", flag: "/assets/flag-6.png" },
]

const FeaturedCourses = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Courses</h2>
      <p className="text-center text-muted-foreground mb-10">
        It is a long established fact that a reader will be distracted by the readable content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col items-center justify-between px-6 py-4 space-y-4">
            <div className="flex items-center justify-center gap-4 ">
              <Avatar>
                <AvatarImage src={course.flag} />
              </Avatar>
              <span className="font-semibold text-lg ">{course.lang}</span>
            </div>
            <Button variant={index === 0 ? "default" : "outline"} className="rounded-full w-full md:w-auto ">
              Language start learn
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCourses
