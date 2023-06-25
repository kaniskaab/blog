import { Carousel, Typography, Button } from "@material-tailwind/react";
import Header from "./Header";
export default function Example() {
  return (
    <Carousel className="h-screen border-b overflow-hidden" >
      <div className=" relative h-full w-full">
        <video loop autoplay="" muted src="https://static.videezy.com/system/resources/previews/000/034/298/original/C0002_13_3.mp4"  className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-white/30">
            <div className="w-screen -mt-10">
                <Header/> 
            </div>
       
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-red-700"
            >
             Balanced and Nutritious Meals
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-black bold"
            >
             Our recipes are designed to provide a perfect balance of nutrients while keeping your calorie intake in check. We focus on incorporating lean proteins, high-fiber grains, fresh fruits and vegetables, and healthy fats to create meals that are both filling and nourishing. Say goodbye to bland and boring diet food!
            </Typography>
            <div className="flex justify-center gap-2">
            <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <video loop autoplay="" muted src="https://assets.mixkit.co/videos/preview/mixkit-woman-standing-on-bathroom-scales-24849-large.mp4"  className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-white/30">
        <div className="w-screen -mt-10">
                <Header/> 
            </div>
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-red-700"
            >
              Embark on a Flavorful Weight Maintenance Journey
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-black bold"
            >
             Don't let the misconception that weight loss means boring, tasteless meals hold you back. At [Your Business Name], we believe that healthy eating can be enjoyable and satisfying. Join us on a flavorful weight loss journey and discover a world of tasty recipes that will help you achieve your goals without sacrificing flavor.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <video loop autoplay="" muted src="https://assets.mixkit.co/videos/preview/mixkit-buying-fruit-from-a-market-vendor-22688-large.mp4"  className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-white/30">
        <div className="w-screen -mt-10">
                <Header/> 
            </div>
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-red-700"
            >
              Locally Sourced, Fresh Ingredients
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-black bold"
            >
             We understand the importance of using fresh, locally sourced ingredients in your meals. That's why we have established strong partnerships with local farmers, suppliers, and grocery stores. By sourcing our ingredients locally, we ensure that you receive the highest quality produce, packed with nutrients and bursting with flavor.
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
