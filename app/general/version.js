/*
 * Copyright (c) 2017-2021 Felipe de Leon <fglfgl27@gmail.com>
 *
 * This file is part of SmartTwitchTV <https://github.com/fgl27/SmartTwitchTV>
 *
 * SmartTwitchTV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SmartTwitchTV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartTwitchTV.  If not, see <https://github.com/fgl27/SmartTwitchTV/blob/master/LICENSE>.
 *y
 */

//Spacing for release maker not trow errors from jshint
var version = {
    VersionBase: '3.0',
    publishVersionCode: 350, //Always update (+1 to current value) Main_version_java after update publishVersionCode or a major update of the apk is released
    ApkUrl: 'https://github.com/fgl27/SmartTwitchTV/releases/download/350/SmartTV_twitch_3_0_350.apk',
    WebVersion: 'March 2024',
    WebTag: 675, //Always update (+1 to current value) Main_version_web after update Main_minversion or a major update of the web part of the app
    changelog: [
        // {
        //     title: 'Version March to July 2024 Apk Version 3.0.363',
        //     changes: [
        //         'Player: Migrate from Exoplayer to Media3, the Exoplayer changed name to Media3 and stop received updates on the old project, if anyone has any issue regarding playback please open github issue or send a email',
        //         'Change featured to front page (name change only)',
        //         'Add User Videos section',
        //         'Improve channel search results order, Twitch provides no order on the result, do a local ordering to show a more constant result',
        //         'Add search Live',
        //         'Add Search Videos',
        //         'Show all counters on all game screens',
        //         'Fix sometimes opening the wrong VOD for "Open the Last VOD" (one of the options that shows when a live end)',
        //         'Fix preview animated image not always showing',
        //         'Fix VOD seek preview image not always showing',
        //         'Improve exiting a search or search content as Channel content, before the app sometimes exit a search on the wrong section',
        //         'General UI/UX improvements, make it easier to use or understand the app',
        //         'Other General improvements'
        //     ]
        // },
        {
            title: 'Version September 2023 to March 2024',
            changes: [
                "Fix App not able to start when Settings Chat options 'Show viewers' and player chat settings 'Side by Side, video and chat' was enabled",
                'Fix unable to change quality during playback if the default quality in settings was different than AUTO',
                'Fix playing single quality streams',
                'Fix auto playback not selecting the best possible quality for Live streams, Twitch messed up their bitrate information provided by their servers, with caused issues as the app uses the bitrate and current available internet speed (bandwidth) to determinate what quality to select',
                'Fix VOD playback starting from 00:00, after switching apps during a VOD playback the app could lose the VOD time position when you come back to it',
                "Improve the chat delay option, sometimes the chosen option wasn't working as expected",
                'Improve player controls, sometime the player would show an option not available for that type of playback which causes control issues',
                'Add extra playback speeds (by Js41637)',
                'Fix the thumbnails option (hold left) not showing all options or showing and not allowing to move up/down',
                'Fix hiding blocked VODs in some of the VOD section',
                'Fix clip playback selecting the best quality, Twitch changed how they order clip options on the server, making necessary local ordering.',
                'General chat improvements',
                'General UI/UX improvements, make it easier to use or understand the app',
                'Other General improvements'
            ]
        }
    ]
};
