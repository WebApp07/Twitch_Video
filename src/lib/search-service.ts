import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getSearch = async (term = "") => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  const commonQuery = {
    OR: [
      {
        name: {
          contains: term,
        },
      },
      {
        user: {
          username: {
            contains: term,
          },
        },
      },
    ],
  };

  const userQuery = userId
    ? {
        ...commonQuery,
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      }
    : commonQuery;

  try {
    const streams = await db.stream.findMany({
      where: userQuery,
      select: {
        user: true,
        id: true,
        name: true,
        isLive: true,
        thumbnailUrl: true,
        updatedAt: true,
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });

    return streams;
  } catch (error) {
    console.error("Error fetching streams: ", error);
    return [];
  }
};
