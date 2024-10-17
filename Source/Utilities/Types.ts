/*!
 * Callisto, a simple and powerful bot package for nin0-dev's chat server.
 * Copyright (c) 2022 Kodarru and contributors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// ******

export interface Message {
    content: string;
    username: string;
    role: number;
    op?: number;

    //? The list of messages that were sent before the bot was started.
    messages?: Message[];

    //! Will be deprecated with the new chat server. Only needed for previous messages.
    user?: string;

    //? When a message is declared as stale, it means it is not a new message and was sent before the bot was started.
    stale?: boolean;

    //? When a message is received, it will be patched with the following functions.
    isMod(): boolean;
    isBot(): boolean;
    isDiscord(): boolean;
    isUser(): boolean;
    isSelf(): boolean;
    Send(content: string): void;
    Reply(content: string): void;
}

export interface ClientData {
    username: string;
    key: string;
    staleMessages: Message[];
}

export interface WebsocketData {
    URI: string;
    Reconnect: boolean;
    ReconnectMaxTrials: number;
}
