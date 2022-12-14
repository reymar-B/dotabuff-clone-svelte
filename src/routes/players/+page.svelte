<script>
    export let data;

    let players = data.players
  
</script>


<div class="flex flex-col bg-bg-main text-xs">
    <div>1</div>
    <div>1</div>
    <div class="container mx-auto px-[4rem] text-white">
        <div class="mx-[10rem]"></div>
        <div>
            <div class="bg-primary mb-2 pl-4 py-1">
                <h2 class="text-xl font-bold">Players</h2>
                <p class="text-sm">Verified</p>
            </div>
            <table class="table-fixed w-full bg-primary border-x-8 border-primary">
                <thead class="text-left pl-4">
                    <tr class="h-[2rem]">
                        <th class="pl-4">Player</th>
                        <th class="pl-4">Popularity</th>
                        <th class="pl-4">Matches Played</th>
                        <th class="pl-4">Win Rate</th>
                        <th class="pl-4">Time Played</th>
                        <th class="pl-4">Social Media</th>
                    </tr>
                </thead>
                <tbody class="bg-primary">
{ #each players as player}
                    <tr class="even:bg-tertiary odd:bg-secondary h-[3rem]">
                        <td class="pl-4 flex items-center">
                            <div class="w-[2.5rem] pt-[3px]">
                                <img class="w-full" src={ player.image } alt={ player.alias }>
                            </div>
                            <div class="ml-4">
                                <p class="text-lime-500 font-medium">{ player.alias }</p>
                                <p class="text-[10px]">{ player.last_played }</p>
                            </div>
                        </td>
                        <td class="pl-4">{ player.popularity }
                            <div class="bg-sky-400 h-[4px]"></div>
                        </td>
                        <td class="pl-4">{ player.matches_played }
                            <div class="bg-red-600 h-[4px]"></div>
                        </td>
                        <td class="pl-4">{ player.win_rate }
                            <div class="bg-lime-600 h-[4px]"></div>
                        </td>
                        <td class="pl-4">{ player.time_played }
                            <div class="bg-neutral-100 h-[4px]"></div>
                        </td>
                        <td class="pl-4">{ player.soc_med.has_fb }
                            <div class=""></div>
                        </td>
                    </tr>
{/each}
                </tbody>
            </table>
        </div>
    </div>
</div>