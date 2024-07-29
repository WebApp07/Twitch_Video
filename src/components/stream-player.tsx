"use client";

import { Stream, User } from "@prisma/client";
import { userViewerToken } from "../../hooks/user-viewer-token";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  const { token, name, identity } = userViewerToken(user.id);

  if (!token || !name || !identity) {
    return (
      <div>
        <h2>Cannot watch the stream</h2>
      </div>
    );
  }
  return <div>Allowed to watch the stream</div>;
};
