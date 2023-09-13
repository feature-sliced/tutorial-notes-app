import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const username = "alice";

  // cleanup the existing database
  await prisma.user.delete({ where: { username } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("paindrivendevelopment", 10);

  const user = await prisma.user.create({
    data: {
      username,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "Shopping List",
      body: `* Bag of milk
* 3 bananas
* Vegan burgers

Don’t forget the vegan burgers, that’s important!`,
      createdAt: new Date("2023-04-27"),
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "Bucket List",
      body: `* [ ] Skydiving
* [ ] Learn to play the piano
* [ ] Visit the Great Wall of China
* [ ] Learn to speak Spanish
* [ ] Learn to speak Mandarin
* [ ] Try a vegan diet for 30 days`,
      createdAt: new Date("2000-04-01"),
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "ArrayList",
      body: `\`\`\`java
public class ArrayList<Element> implements List<Element> {
  private Element[] elements;
  private int size;

  public ArrayList() {
    elements = new Element[10];
    size = 0;
  }
}
\`\`\``,
      createdAt: new Date("1970-01-01"),
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
