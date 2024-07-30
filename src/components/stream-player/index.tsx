"use client";

import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";
import { userViewerToken } from "../../../hooks/user-viewer-token";
import { Video } from "../stream-player/video";

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
  return (
    <>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className="grid grid-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full"
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostName={user.username} hostIdentity={user.id} />
        </div>
      </LiveKitRoom>
    </>
  );
};
