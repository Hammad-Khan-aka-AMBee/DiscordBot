import os
from dotenv import load_dotenv
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
import discord
from discord.ext import commands
from discord import Intents
intents = discord.Intents.default()
from asyncio import run

intents.message_content = True
intents.typing = True
intents.presences = True
intents.messages = True
intents.members = True

client = commands.Bot(command_prefix='!', intents=intents)
owners = [637598340154130432]#1076273465906117878, 591770524380192511, 1076273476919150998] # replace ids here with trusted user's discord ids that you want to have access to the shell
bot = commands.Bot(command_prefix='!', owner_ids = set(owners), intents=intents)

run(bot.load_extension('dshell'))
bot.dshell_config['shell_channels'] = [824008927368577094]

@client.event
async def on_ready():
	print(f'{client.user} has connected to Discord!')

@client.event
async def on_message(message):
	print(message.author, message.content, message.channel.id)
	await client.process_commands(message)	



@client.command()
async def hello(ctx):		#channel = client.get_channel(824008927368577094)

    await ctx.send(f'hello there {ctx.author.mention}')

@client.command()
async def say(ctx, arg):
	await ctx.send(arg) 



client.run(TOKEN)
